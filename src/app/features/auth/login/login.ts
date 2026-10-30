
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  isRegisterMode = false;

  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  loading = false;
  errorMessage = '';

  async submit(): Promise<void> {
    this.errorMessage = '';

    if (!this.email.trim() || !this.password) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }

    if (this.isRegisterMode && !this.name.trim()) {
      this.errorMessage = 'Informe seu nome.';
      return;
    }

    if (this.isRegisterMode && this.password !== this.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'A senha precisa ter pelo menos 6 caracteres.';
      return;
    }

    this.loading = true;

    try {
      if (this.isRegisterMode) {
        await this.authService.register(
          this.name.trim(),
          this.email.trim(),
          this.password
        );
      } else {
        await this.authService.login(
          this.email.trim(),
          this.password
        );
      }

      await this.router.navigateByUrl('/');
    } catch (error: any) {
      this.errorMessage = this.getErrorMessage(error?.code);
    } finally {
      this.loading = false;
    }
  }

  async loginWithGoogle(): Promise<void> {
    this.errorMessage = '';
    this.loading = true;

    try {
      await this.authService.loginWithGoogle();
      await this.router.navigateByUrl('/');
    } catch (error: any) {
      if (error?.code !== 'auth/popup-closed-by-user') {
        this.errorMessage = this.getErrorMessage(error?.code);
      }
    } finally {
      this.loading = false;
    }
  }

  toggleMode(): void {
    this.isRegisterMode = !this.isRegisterMode;
    this.errorMessage = '';
    this.password = '';
    this.confirmPassword = '';
  }

  private getErrorMessage(code: string): string {
    const errors: Record<string, string> = {
      'auth/email-already-in-use': 'Este e-mail já possui uma conta.',
      'auth/invalid-email': 'Digite um e-mail válido.',
      'auth/invalid-credential': 'E-mail ou senha incorretos.',
      'auth/user-not-found': 'Não encontramos uma conta com esse e-mail.',
      'auth/wrong-password': 'A senha informada está incorreta.',
      'auth/weak-password': 'Escolha uma senha mais forte.',
      'auth/network-request-failed': 'Verifique sua conexão com a internet.',
      'auth/popup-blocked': 'O navegador bloqueou a janela de login.',
      'auth/unauthorized-domain': 'Este domínio não está autorizado no Firebase.',
      'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde.',
    };

    return errors[code] ?? 'Não foi possível realizar a operação. Tente novamente.';
  }
}

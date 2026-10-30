
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.user;
  menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  async logout(): Promise<void> {
    try {
      await this.authService.logout();
      this.closeMenu();
      await this.router.navigateByUrl('/');
    } catch (error) {
      console.error('Erro ao sair da conta:', error);
    }
  }
}


import { Injectable, signal } from '@angular/core';
import {
  User,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

import { auth } from '../firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = signal<User | null>(null);
  loading = signal(true);

  constructor() {
    onAuthStateChanged(auth, (user) => {
      this.user.set(user);
      this.loading.set(false);
    });
  }

  async register(name: string, email: string, password: string): Promise<User> {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(credential.user, {
      displayName: name,
    });

    this.user.set(credential.user);

    return credential.user;
  }

  async login(email: string, password: string): Promise<User> {
    const credential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    this.user.set(credential.user);

    return credential.user;
  }

  async loginWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);

    this.user.set(credential.user);

    return credential.user;
  }

  async logout(): Promise<void> {
    await signOut(auth);
    this.user.set(null);
  }
}

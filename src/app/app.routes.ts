
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/dashboard').then(m => m.Dashboard),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./features/calendar/calendar').then(m => m.Calendar),
  },
  {
    path: 'cycle',
    loadComponent: () =>
      import('./features/cycle/cycle').then(m => m.Cycle),
  },
  {
    path: 'notes',
    loadComponent: () =>
      import('./features/notes/notes').then(m => m.Notes),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then(m => m.Login),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

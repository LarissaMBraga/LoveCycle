
import { Routes } from '@angular/router';

import { Dashboard } from './features/dashboard/dashboard';
import { Calendar } from './features/calendar/calendar';
import { Cycle } from './features/cycle/cycle';
import { Notes } from './features/notes/notes';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'calendar', component: Calendar },
  { path: 'cycle', component: Cycle },
  { path: 'notes', component: Notes },
  { path: '**', redirectTo: '' }
];

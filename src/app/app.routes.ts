// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Hobbies } from './pages/hobbies/hobbies';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'hobbies', component: Hobbies },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' } // unknown path → Home
];

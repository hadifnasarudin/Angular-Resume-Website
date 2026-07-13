import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Hobbies } from './pages/hobbies/hobbies';
import { Contact } from './pages/contact/contact';
import { FaraidProject } from './pages/faraid-project/faraid-project';
import { CmsProject } from './cms-project/cms-project';
import { CypressProject } from './cypress-project/cypress-project';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'hobbies', component: Hobbies },
  { path: 'contact', component: Contact },
  { path: 'projects/faraid-a-z', component: FaraidProject },
  { path: 'projects/cms', component: CmsProject },
  { path: 'projects/cypress', component: CypressProject },
  { path: '**', redirectTo: '' },
];

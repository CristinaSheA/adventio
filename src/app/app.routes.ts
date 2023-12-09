import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  },
];

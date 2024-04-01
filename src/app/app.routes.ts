import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'charts',
    pathMatch: 'full',
  },
  {
    path: 'charts',
    loadComponent: () =>
      import('./chart-component/chart-component.component').then(
        (m) => m.ChartComponentComponent
      ),
  },
  {
    path: 'moment',
    loadComponent: () =>
      import('./moment-component/moment-component.component').then(
        (m) => m.MomentComponentComponent
      ),
  },
];

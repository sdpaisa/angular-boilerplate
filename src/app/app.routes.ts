import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
        title: 'Inicio',
      },
      {
        path: 'nosotros',
        loadComponent: () =>
          import('./pages/aboutus/aboutus.component').then(
            (m) => m.AboutusComponent,
          ),
        title: 'Nosotros',
      },
    ],
  },
];

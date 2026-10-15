import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard-page/dashboard-page').then(
        (m) => m.DashboardPage,
      ),
    children: [
      {
        path: 'productos',
        loadComponent: () =>
          import('./components/consulta-productos/consulta-productos').then(
            (m) => m.ConsultaProductos,
          ),
      },
      {
        path: '',
        redirectTo: 'productos',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

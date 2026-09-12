import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./Sistemita/pages/dashboard-page/dashboard-page').then(
        (m) => m.DashboardPage,
      ),
    children: [
      {
        path: 'crear',
        loadComponent: () =>
          import('./Sistemita/components/crear_cliente/crear_cliente').then(
            (m) => m.CrearCliente,
          ),
      },
      {
        path: 'consultar',
        loadComponent: () =>
          import('./Sistemita/components/consulta_cliente/consulta_cliente').then(
            (m) => m.ConsultaCliente,
          ),
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

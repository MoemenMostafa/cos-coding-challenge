import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.component.module').then( m => m.LoginComponentModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./pages/overview/overview.component.module').then( m => m.OverviewComponentModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['{SALESMAN_USER}']}
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

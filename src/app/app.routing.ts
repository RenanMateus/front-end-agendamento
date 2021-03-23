import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule),
    // canActivate: [AuthGuardService],
    // canLoad: [AuthGuardService]
  },
  {
    path: 'pendencia',
    loadChildren: () => import('./pendencia/pendencia.module').then(m => m.PendenciaModule),
    // canActivate: [AuthGuardService],
    // canLoad: [AuthGuardService]
  },

  // ROTAS QUE NÃO PRECISAM DE AUTENTICAÇÃO
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

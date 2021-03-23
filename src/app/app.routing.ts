import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'agendamentos',
    loadChildren: () => import('./agendamento/agendamento.module').then(m => m.AgendamentoModule),
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule),
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule),
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  },
  {
    path: 'pendencias',
    loadChildren: () => import('./pendencia/pendencia.module').then(m => m.PendenciaModule),
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  },
  {
    path: 'perfis',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule),
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule),
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  },

  // ROTAS QUE NÃO PRECISAM DE AUTENTICAÇÃO
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService]
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesListaComponent
  },
  {
    path: 'novo',
    component: ClientesCadastroComponent
  },
  {
    path: ':id',
    component: ClientesCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }

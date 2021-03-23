import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendamentosListaComponent } from './agendamentos-lista/agendamentos-lista.component';
import { AgendamentosCadastroComponent } from './agendamentos-cadastro/agendamentos-cadastro.component';
import { AgendamentosEditarComponent } from './agendamentos-editar/agendamentos-editar.component';

const routes: Routes = [
  {
    path: '',
    component: AgendamentosListaComponent
  },
  {
    path: 'novo',
    component: AgendamentosCadastroComponent
  },
  {
    path: ':id',
    component: AgendamentosEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentoRoutingModule { }

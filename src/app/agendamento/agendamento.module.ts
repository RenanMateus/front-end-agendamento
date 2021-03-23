import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentosListaComponent } from './agendamentos-lista/agendamentos-lista.component';
import { AgendamentosCadastroComponent } from './agendamentos-cadastro/agendamentos-cadastro.component';
import { AgendamentosEditarComponent } from './agendamentos-editar/agendamentos-editar.component';


@NgModule({
  declarations: [AgendamentosListaComponent, AgendamentosCadastroComponent, AgendamentosEditarComponent],
  imports: [
    CommonModule,
    AgendamentoRoutingModule
  ]
})
export class AgendamentoModule { }

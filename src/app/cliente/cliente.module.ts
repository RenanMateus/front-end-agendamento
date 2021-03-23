import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { ClientesEditarComponent } from './clientes-editar/clientes-editar.component';


@NgModule({
  declarations: [ClientesListaComponent, ClientesCadastroComponent, ClientesEditarComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }

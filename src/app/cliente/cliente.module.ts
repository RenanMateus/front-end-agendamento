import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { IMaskModule } from 'angular-imask';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';


@NgModule({
  declarations: [
    ClientesListaComponent,
    ClientesCadastroComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ClienteRoutingModule,
    IMaskModule,
    NgxPaginationModule
  ]
})
export class ClienteModule { }

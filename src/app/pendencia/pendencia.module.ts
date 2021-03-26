import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { PendenciaRoutingModule } from './pendencia-routing.module';
import { PendeciasListaComponent } from './pendecias-lista/pendecias-lista.component';
import { PendenciaCadastroComponent } from './pendencia-cadastro/pendencia-cadastro.component';


@NgModule({
  declarations: [
    PendeciasListaComponent,
    PendenciaCadastroComponent
  ],
  imports: [
    CommonModule,
    PendenciaRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class PendenciaModule { }

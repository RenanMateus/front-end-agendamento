import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendenciaRoutingModule } from './pendencia-routing.module';
import { PendeciasListaComponent } from './pendecias-lista/pendecias-lista.component';
import { PendeciasCriarComponent } from './pendecias-criar/pendecias-criar.component';
import { PendeciasEditarComponent } from './pendecias-editar/pendecias-editar.component';


@NgModule({
  declarations: [PendeciasListaComponent, PendeciasCriarComponent, PendeciasEditarComponent],
  imports: [
    CommonModule,
    PendenciaRoutingModule
  ]
})
export class PendenciaModule { }

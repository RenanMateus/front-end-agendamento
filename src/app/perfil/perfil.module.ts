import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfisEditarComponent } from './perfis-editar/perfis-editar.component';
import { PerfisCadastroComponent } from './perfis-cadastro/perfis-cadastro.component';
import { PerfisListaComponent } from './perfis-lista/perfis-lista.component';


@NgModule({
  declarations: [PerfisEditarComponent, PerfisCadastroComponent, PerfisListaComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosCadastroComponent } from './usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosEditarComponent } from './usuarios-editar/usuarios-editar.component';


@NgModule({
  declarations: [UsuariosListaComponent, UsuariosCadastroComponent, UsuariosEditarComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }

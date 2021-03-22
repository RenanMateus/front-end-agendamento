import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendeciasListaComponent } from './pendecias-lista/pendecias-lista.component';
import { PendeciasEditarComponent } from './pendecias-editar/pendecias-editar.component';
import { PendeciasCriarComponent } from './pendecias-criar/pendecias-criar.component';

const routes: Routes = [
  {
    path: '',
    component: PendeciasListaComponent
  },
  {
    path: 'novo',
    component: PendeciasCriarComponent
  },
  {
    path: ':id',
    component: PendeciasEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendenciaRoutingModule { }

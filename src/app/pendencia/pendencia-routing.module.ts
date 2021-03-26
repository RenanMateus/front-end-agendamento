import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendeciasListaComponent } from './pendecias-lista/pendecias-lista.component';
import { PendenciaCadastroComponent } from './pendencia-cadastro/pendencia-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: PendeciasListaComponent
  },
  {
    path: 'novo',
    component: PendenciaCadastroComponent
  },
  {
    path: ':id',
    component: PendenciaCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendenciaRoutingModule { }

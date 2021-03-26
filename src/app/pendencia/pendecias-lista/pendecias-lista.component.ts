import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { Resposta } from './../../classes/resposta-servidor';
import { environment } from './../../../environments/environment';
import { Permissoes } from './../../enumeradores/permissoes.enum';
import { Pendencia } from './../../classes/pendencia';
import { Utils } from '../../utils/utils';
import { Toasts } from '../../utils/alertas';
import { PendenciaEnum } from '../../enumeradores/pendencia.enum';

@Component({
  selector: 'app-pendecias-lista',
  templateUrl: './pendecias-lista.component.html',
  styleUrls: ['./pendecias-lista.component.css']
})
export class PendeciasListaComponent implements OnInit {
  pendencias: Pendencia[] = new Array();
  carregando = true;
  permissoesUsuario = new Array();
  paginaAtual = 0;
  totalItens = 0;


  constructor(private http: HttpClient, private router: Router) {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    this.permissoesUsuario = usuario.perfil.permissoes.split('-');
  }

  ngOnInit(): void {
    if (!Utils.verificarPermissao(Permissoes.visualizarPendencia, this.permissoesUsuario)) {
      Utils.usuarioSemPermissao();
      this.router.navigate(['inicio']);
      return;

    } else {
      this.listarPendencias(1);
    }
  }


  listarPendencias(pagina) {
    this.paginaAtual = pagina;
    this.http.get(environment.apiUrl + 'Pendencias', { params: { pagina: (this.paginaAtual - 1).toString() } }).subscribe((response: Resposta) => {
      if (response.status === 1) {
        this.totalItens = response.totalItens;
        this.pendencias = response.dados;
        this.carregando = false;

      } else if (response.status === 2) {
        Toasts.mensagemErro(response.mensagem);
        this.carregando = false;
      }
    }, () => {
      Toasts.mensagemErroConexao();
      this.carregando = false;
    });
  }

  novo() {
    if (!Utils.verificarPermissao(Permissoes.cadastrarPendencia, this.permissoesUsuario)) {
      Utils.usuarioSemPermissao();
      return;
    }

    this.router.navigate(['pendencias/novo']);
  }

  visualizar(id) {
    if (!Utils.verificarPermissao(Permissoes.visualizarPendencia, this.permissoesUsuario)) {
      Utils.usuarioSemPermissao();
      return;
    }

    this.router.navigate(['pendencias', id]);
  }

  finalizarPendencia(pendencia: Pendencia) {
    if (!Utils.verificarPermissao(Permissoes.finalizarPendencia, this.permissoesUsuario)) {
      Utils.usuarioSemPermissao();
      return;
    }

    pendencia.situacao = PendenciaEnum.Finalizado;
    this.http.put(environment.apiUrl + 'Pendencia/' + pendencia.id, pendencia).subscribe((response: Resposta) => {
      if (response.status === 1) {
        this.listarPendencias(this.paginaAtual);
        Toasts.mensagemSucesso('Pendência finalizada!');

      } else if (response.status === 2) {
        Toasts.mensagemErro(response.mensagem);
      }
    }, () => {
      Toasts.mensagemErroConexao();
    });
  }

  excluirPendencia(id) {
    if (!Utils.verificarPermissao(Permissoes.excluirPendencia, this.permissoesUsuario)) {
      Utils.usuarioSemPermissao();
      return;
    }

    Swal.fire({
      title: 'Deseja realmente excluir a pendência?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Excluir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.carregando = true;
        this.http.delete(environment.apiUrl + 'Pendencia/' + id).subscribe((response: Resposta) => {
          if (response.status === 1) {
            this.listarPendencias(this.paginaAtual);
            Toasts.mensagemSucesso(response.mensagem);
            this.carregando = false;

          } else if (response.status === 2) {
            Toasts.mensagemErro(response.mensagem);
            this.carregando = false;
          }
        }, () => {
          Toasts.mensagemErroConexao();
          this.carregando = false;
        });

      }
    });
  }

}

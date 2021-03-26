import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import Swal from 'sweetalert2';

import { Permissoes } from './../../enumeradores/permissoes.enum';
import { environment } from './../../../environments/environment';
import { Resposta } from './../../classes/resposta-servidor';
import { Cliente } from '../../classes/cliente';
import { Toasts } from '../../utils/alertas';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[] = new Array();
  carregando = true;
  permissoesUsuario = new Array();
  paginaAtual = 0;
  totalItens = 0;


  constructor(private router: Router, private http: HttpClient) {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    this.permissoesUsuario = usuario.perfil.permissoes.split('-');
  }

  ngOnInit() {
    if (!Utils.verificarPermissao(Permissoes.visualizarCliente, this.permissoesUsuario)) {
      Utils.usuarioSemPermissao();
      this.router.navigate(['inicio']);
      return;

    } else {
      this.listarClientes(1);
    }
  }


  listarClientes(pagina) {
    this.paginaAtual = pagina;
    this.http.get(environment.apiUrl + 'Clientes', { params: { pagina: (this.paginaAtual - 1).toString() } }).subscribe((response: Resposta) => {
      if (response.status === 1) {
        this.totalItens = response.totalItens;
        this.clientes = response.dados;
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
    if (!Utils.verificarPermissao(Permissoes.cadastrarEditarCliente, this.permissoesUsuario)) {
      Utils.usuarioSemPermissao();
      return;
    }

    this.router.navigate(['clientes/novo']);
  }

  editar(id) {
    if (!Utils.verificarPermissao(Permissoes.cadastrarEditarCliente, this.permissoesUsuario)) {
      Utils.usuarioSemPermissao();
      return;
    }

    this.router.navigate(['clientes', id]);
  }

  excluirCliente(id) {
    if (!Utils.verificarPermissao(Permissoes.excluirCliente, this.permissoesUsuario)) {
      Utils.usuarioSemPermissao();
      return;
    }

    Swal.fire({
      title: 'Deseja realmente excluir o cliente?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Excluir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.carregando = true;
        this.http.delete(environment.apiUrl + 'Cliente/' + id).subscribe((response: Resposta) => {
          if (response.status === 1) {
            this.listarClientes(this.paginaAtual);
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

  mascararTelefone(telefone) {
    return Utils.mascararTelefone(telefone);
  }
}

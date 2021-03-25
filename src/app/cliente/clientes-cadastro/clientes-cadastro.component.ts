import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from './../../../environments/environment';
import { Resposta } from './../../classes/resposta-servidor';
import { Permissoes } from './../../enumeradores/permissoes.enum';
import { Cliente } from '../../classes/cliente';
import { Utils } from '../../utils/utils';
import { Toasts } from '../../utils/alertas';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {
  idCliente = this.route.snapshot.paramMap.get('id');
  cliente: Cliente = new Cliente();
  cpfValido = false;
  permissoesUsuario = new Array();
  salvando = false;
  carregando = true;


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    this.permissoesUsuario = usuario.perfil.permissoes.split('-');
  }

  ngOnInit(): void {
    if (!Utils.verificarPermissao(Permissoes.cadastrarEditarCliente, this.permissoesUsuario)) {
      Utils.usuarioSemPermissao();
      this.router.navigate(['inicio']);
      return;

    } else {
      this.buscarCliente();
    }
  }


  buscarCliente() {
    this.http.get(environment.apiUrl + 'Cliente/' + this.idCliente).subscribe((response: Resposta) => {
      if (response.status == 1) {
        this.cliente = response.dados;
        this.carregando = false;

      } else if (response.status == 2) {
        Toasts.mensagemErro(response.mensagem);
      }
    }, () => {
      Toasts.mensagemErroConexao();
    });
  }

  salvarCliente() {
    if (!Utils.verificarPermissao(Permissoes.cadastrarEditarCliente, this.permissoesUsuario)) {
      Utils.usuarioSemPermissao();
      this.router.navigate(['inicio']);
      return;
    }

    this.salvando = true;
    this.cliente.telefone1 = this.cliente.telefone1.replace(/\D/g, '');
    this.cliente.telefone2 = this.cliente.telefone2 ? this.cliente.telefone2.replace(/\D/g, '') : '';

    if (this.idCliente) {
      this.http.put(environment.apiUrl + 'Cliente/' + this.idCliente, this.cliente).subscribe((response: Resposta) => {
        if (response.status == 1) {
          Toasts.mensagemSucesso('Cliente Alterado com sucesso!');
          this.router.navigate(['clientes']);

        } else if (response.status == 2) {
          Toasts.mensagemErro(response.mensagem);
          this.salvando = false;
        }
      }, () => {
        Toasts.mensagemErroConexao();
        this.salvando = false;
      });

    } else {
      this.http.post(environment.apiUrl + 'Cliente', this.cliente).subscribe((response: Resposta) => {
        if (response.status == 1) {
          Toasts.mensagemSucesso('Cliente Cadastrado com sucesso!');
          this.router.navigate(['clientes']);

        } else if (response.status == 2) {
          Toasts.mensagemErro(response.mensagem);
          this.salvando = false;
        }
      }, () => {
        Toasts.mensagemErroConexao();
        this.salvando = false;
      });
    }
  }

  voltar() {
    this.router.navigate(['clientes']);
  }

  buscarCep(cep: string) {
    cep = cep.replace(/[^\d]+/g, '');
    this.http.get(`http://viacep.com.br/ws/${cep}/json/`).subscribe((response: any) => {
      this.cliente.cidade = response.localidade;
      this.cliente.uf = response.uf;
      this.cliente.bairro = response.bairro;
      this.cliente.logradouro = response.logradouro;
      this.cliente.complemento = response.complemento;
    }, () => {
      Toasts.mensagemErroConexao();
    });
  }

  validarCampo(cpfCnpj) {
    this.cpfValido = Utils.validaCpfCnpj(cpfCnpj.replace(/\D/g, ''));
  }
}

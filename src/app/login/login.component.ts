import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Resposta } from './../classes/resposta-servidor';
import { UsuarioLogin } from './../classes/usuario';
import { Toasts } from '../utils/alertas';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: UsuarioLogin = new UsuarioLogin();
  fazendoLogin = false;


  constructor(private router: Router, private http: HttpClient) { }


  login() {
    this.fazendoLogin = true;
    this.http.post(environment.apiUrl + 'Usuario/Login', this.usuario).subscribe((response: Resposta) => {
      if (response.status === 1) {
        sessionStorage.setItem('usuario', JSON.stringify(response.dados));
        setTimeout(() => {
          this.router.navigate(['inicio']);
          this.fazendoLogin = false;
        }, 200);

      } else if (response.status === 2) {
        Toasts.mensagemErro(response.mensagem);

      }
    }, () => {
      Toasts.mensagemErroConexao();
      this.fazendoLogin = false;
    });
  }
}

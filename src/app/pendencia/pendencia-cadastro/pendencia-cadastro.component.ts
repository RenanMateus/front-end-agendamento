import { Pendencia } from './../../classes/pendencia';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pendencia-cadastro',
  templateUrl: './pendencia-cadastro.component.html',
  styleUrls: ['./pendencia-cadastro.component.css']
})
export class PendenciaCadastroComponent implements OnInit {
  idPendencia = this.route.snapshot.paramMap.get('id');
  pendencia: Pendencia = new Pendencia();
  permissoesUsuario = new Array();
  salvando = false;
  carregando = true;
  clienteBusca = '';


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  salvarPendencia() {

  }

  voltar() {

  }

}

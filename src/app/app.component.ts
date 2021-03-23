import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  autenticado = false;


  constructor() { }

  ngOnInit() {
    const usuario: any = JSON.parse(sessionStorage.getItem('usuario'));

    if (usuario?.token) {
      this.autenticado = true;
    }
  }

}

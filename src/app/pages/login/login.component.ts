import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  view_login:string = 'aparecendo'
  view_cadastro:string = 'escondido'

  constructor() { }

  ngOnInit(): void {
  }

  mudar_tela_login(){

    this.view_cadastro = 'aparecendo'

    this.view_login = 'escondido'

  }
}

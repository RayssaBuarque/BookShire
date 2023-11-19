import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  view_login:string = 'aparecendo'
  view_cadastro:string = 'escondido'
  tela_cpf:string = 'escondido'
  tela_cnpj:string = 'escondido'

  constructor() { }

  ngOnInit(): void {
  }

  mudar_tela_login(){

    this.view_cadastro = 'aparecendo'

    this.view_login = 'escondido'

  }
  mudar_tela_cadastro(){

    this.view_cadastro ='escondido'

    this.view_login = 'aparecendo'

  }
  mudar_tela_cpf(){

    this.tela_cpf = 'aparecendo'
    this.tela_cnpj = 'escondido'

  }
  mudar_tela_cnpj(){

    this.tela_cnpj = 'aparecendo'
    this.tela_cpf = 'escondido'

  }
}

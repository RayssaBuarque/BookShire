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
  view_logo:string = 'aparecendo'
  view_endereco:string = 'escondido'
 

  constructor() { }

  ngOnInit(): void {
  }
  

  mudar_tela_login(){

    this.view_cadastro = 'aparecendo'

    this.view_login = 'escondido'

    this.view_logo = 'esconder'

    this.view_endereco = 'escondido'


  }
  mudar_tela_cadastro(){

    this.view_cadastro ='escondido'

    this.view_login = 'aparecendo'

    this.tela_cnpj = 'escondido'

    this.tela_cpf = 'escondido'

    this.view_logo = 'aparecendo'

    this.view_endereco = 'escondido'
    
  }
  mudar_tela_endereco(){

    this.view_cadastro ='escondido'

    this.view_login = 'escondido'

    this.tela_cnpj = 'escondido'

    this.tela_cpf = 'escondido'

    this.view_logo = 'escondido'

    this.view_endereco = 'aparecendo'


  }
  mudar_tela_cpf(){

    this.tela_cpf = 'aparecendo'
    this.tela_cnpj = 'escondido'

  }
  mudar_tela_cnpj(){

    this.tela_cnpj = 'aparecendo'
    this.tela_cpf = 'escondido'

  }
  seta_voltar(){

    if(this.view_endereco === 'aparecendo'){

        this.view_endereco = 'escondido'

        this.view_cadastro = 'aparecendo'
      // esconder apenas na tela do pc 
        this.view_logo = 'esconder'

    }
    
  }
 


}

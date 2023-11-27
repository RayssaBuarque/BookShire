import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login/login.service';

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
 
  // Objeto que armazena inputs do formulario de Login
  loginForm = this.formBuilder.group({
    email: null,
    senha: null
  })

  msgErro:string = ''

  constructor(
    private formBuilder:FormBuilder,
    private log:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  

  // função que ele roda pra tentar logar no BookShire
  login():void{
    let loginInfo = this.loginForm.value

    // Conferindo se nenhum campo está vazio
    if(loginInfo.email == null || loginInfo.senha == null){
      this.msgErro = 'Preencha todos os campos para continuar'
    }else{

      let vbody = {
        "email": loginInfo.email,
        "senha":loginInfo.senha
      }

      // o login é realizado via create pq mandar dados pelo body é mais seguro que por querys/params
      this.log.login('/login', '', vbody)
        .then((res:any) => {

          if(res.length == 0){
            this.msgErro = 'Senha e/ou Email inválidos'
          }else{
            this.msgErro = ''

            // armazenando id do usuário logado
            localStorage.setItem('userId', res[0].Id_usuario)

            this.router.navigate([`..#`]);
          }
        })

    }
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

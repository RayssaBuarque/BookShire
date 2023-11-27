import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-chat-geral',
  templateUrl: './chat-geral.component.html',
  styleUrls: [
    './chat-geral.component.css', // css da div de chat geral
    'chat-individual.css' // css da div de conversa individual
  ]
})
export class ChatGeralComponent implements OnInit {
  
  //configurar cadastro mais tarde
  idUsuario:string = JSON.parse(localStorage.getItem('userId') || '{}')
  idChats:string[] = []

  chatIndividual:boolean = false

  //dados variaveis da conversa aberta:
  fotoUsuario!:string 
  nomeUsuario!:string

  constructor(
    private crud:CrudService,
    private login:LoginService
  ) { }

  ngOnInit(): void {
    this.login.isLoggedIn()
    this.getConversas()
  }

  // Mudando a tela visível para o chat geral ou um chat específico
  mudarConversa(chat:any):void{
    if(!this.chatIndividual == true && chat != null){
      this.crud.read('/chat', chat, '')
        .then((res:any) => {

          let userId = (res[0].Id_usuario1 != this.idUsuario)? res[0].Id_usuario1 : res[0].Id_usuario2
          this.crud.read('/users', userId, '')
            .then((r:any) => {
              let nome = r[0].nome.split(' ')
              this.nomeUsuario = nome[0] + ' ' + nome[ nome.length - 1]

              try{ // Tentando adicionar uma imagem ao usuário
                this.fotoUsuario = r[0].fotoUsuario
              }catch(error){ this.fotoUsuario = '/assets/thumbnails/default_perfil.png'}
            })

        })
    }

    this.chatIndividual = !this.chatIndividual
  }

  getConversas(){
    this.crud.read('/chat', '', '')
      .then((res:any) => {
        let idPedidos: any[] = []

        //coletando chats onde User é cliente
        this.crud.read('/pedidos', '', `?Id_cliente=${this.idUsuario}`)
          .then((pCliente:any)=>{
            for(let pedido of pCliente){
              if(pedido.dataConclusao == null){
                idPedidos.push(pedido.Id_pedido)
              }
            }

            // coletando chats onde User é anunciante
            this.crud.read('/pedidos', '', `?Id_anunciante=${this.idUsuario}`)
              .then((pAnunciante:any) =>{
                for(let pedido of pAnunciante){
                  if(pedido.dataConclusao == null){
                    idPedidos.push(pedido.Id_pedido)
                  }
                }

                for(let chats of res){
                  if(idPedidos.includes(chats.Id_pedido)){
                    this.idChats.push(chats.Id_chat)
                  }
                }
              })
          })
        
      })
  }

}

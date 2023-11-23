import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

import { userData } from 'src/assets/data/user_data';

@Component({
  selector: 'app-chat-geral',
  templateUrl: './chat-geral.component.html',
  styleUrls: ['./chat-geral.component.css']
})
export class ChatGeralComponent implements OnInit {
  
  //configurar cadastro mais tarde
  idUsuario:string = userData.userId

  idChats:string[] = []

  constructor(
    private crud:CrudService
  ) { }

  ngOnInit(): void {
    this.getConversas()
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
                console.log(pAnunciante)
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

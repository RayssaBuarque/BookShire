import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-chat-geral',
  templateUrl: './chat-geral.component.html',
  styleUrls: ['./chat-geral.component.css']
})
export class ChatGeralComponent implements OnInit {
  
  //configurar cadastro mais tarde
  idUsuario:string = '2'

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
        for(let chats of res){
          this.idChats.push(chats.Id_chat)
        }
      })
  }

}

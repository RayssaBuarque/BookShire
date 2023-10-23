import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversa-thumb',
  templateUrl: './conversa-thumb.component.html',
  styleUrls: ['./conversa-thumb.component.css']
})
export class ConversaThumbComponent implements OnInit {

  nomeUsuario:string = 'Nome do Usuário'
  fotoUsuario:string = '../../assets/thumbnails/default_perfil.png'
  livroConversa:string = 'Título do livro'

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  url_fotoUsuario:string = '../../../assets/thumbnails/default-book_thumbnail.png'
  nome_usuario:string = 'Nome do Usuário'
  constructor() { }

  ngOnInit(): void {
  }

}

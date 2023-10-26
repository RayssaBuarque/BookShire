import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private idUsuario:string = "1"; //descobrir como dinamizar isso um pouco mais
  url_fotoUsuario:string = '../../../assets/thumbnails/default-book_thumbnail.png'
  nome_usuario:string = 'Nome do Usuário'
  
  constructor( private crud:CrudService) { }

  ngOnInit(): void {
    // this.nome_usuario = this.crud.read('/users', this.idUsuario);
  }

}

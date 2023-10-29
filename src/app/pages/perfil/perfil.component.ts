import { Component, OnInit, AfterContentInit} from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private idUsuario:string = "2"; //descobrir como dinamizar isso um pouco mais
  private dadosUsuario:any = '';
  url_fotoUsuario:string = '../../../assets/thumbnails/default-book_thumbnail.png'
  nome_usuario:string = 'Nome do Usuário'
  
  constructor( private crud:CrudService) { }

  ngOnInit(): void {
    this.crud.read('/users', this.idUsuario, "")
      .then( (res:JSON) => {
        // console.log(res)
        this.dadosUsuario = res
      
        this.nome_usuario = this.dadosUsuario[0].nome
        this.url_fotoUsuario = this.dadosUsuario[0].fotoUsuario
      })
  } 

}

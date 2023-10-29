import { Component, OnInit, AfterContentInit} from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';
import { Anuncio } from 'src/app/models/anuncio';

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
  localUsuario:string = 'Local dos Anúncios'
  idAnuncios:number[] = []

  //index da seção que fica aparecendo no perfil
  secaoIndex:number = 0
  
  constructor( private crud:CrudService) { }

  ngOnInit(): void {
    this.crud.read('/users', this.idUsuario, "")
      .then( (res:JSON) => {
        // console.log(res)
        this.dadosUsuario = res
      
        this.nome_usuario = this.dadosUsuario[0].nome
        this.url_fotoUsuario = this.dadosUsuario[0].fotoUsuario
        this.getEndereco(this.dadosUsuario[0].Id_usuario);
      })
    
    this.getAnuncios()
  } 

  getAnuncios():void{
    this.crud.read('/anuncios', '', `?Id_usuario=${this.idUsuario}`)
      .then((res:any[]) => {
        // console.log(res)
        for (let i = 0; i< res.length; i++){
          this.idAnuncios.push( res[i].Id_anuncio )
        }
        console.log(this.idAnuncios)
      })
  }

  getEndereco(id:number):void{
    this.crud.read('/endereco', '', `?Id_usuario=${id}`)
      .then( (res:any) =>{
        this.localUsuario = res[0].bairro
      } )

  }

  mudarSecao(index:number):void{
    if(index == 0){
      this.secaoIndex = 0;
    }
    else if(index == 1){
      this.secaoIndex = 1;
    }
    if(index == 2){
      this.secaoIndex = 2;
    }
  }

}

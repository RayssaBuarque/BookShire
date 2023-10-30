import { Component, OnInit, AfterContentInit} from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Anuncio } from 'src/app/models/anuncio';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private idUsuario:string | null = "2"; //descobrir como dinamizar isso um pouco mais
  private dadosUsuario:any = '';
  url_fotoUsuario:string = '../../../assets/thumbnails/default-book_thumbnail.png'
  nome_usuario:string = 'Nome do Usuário'
  localUsuario:string = 'Local dos Anúncios'
  
  idAnuncios:number[] = []
  idPedidos:number[] = []

  //index da seção que fica aparecendo no perfil
  secaoIndex:number = 1
  
  constructor( private crud:CrudService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    //recolhendo ids da rota
    this.route.paramMap.subscribe( (value) =>{
      this.idUsuario = value.get('id')
      // console.log(this.idUsuario)
    });

    this.crud.read('/users', this.idUsuario, "")
      .then( (res:JSON) => {
        // console.log(res)
        this.dadosUsuario = res
      
        this.nome_usuario = this.dadosUsuario[0].nome
        this.url_fotoUsuario = this.dadosUsuario[0].fotoUsuario
        this.getEndereco(this.dadosUsuario[0].Id_usuario);
      })
    
    this.getAnuncios()
    this.getPedidos()
  } 

  getAnuncios():void{
    this.crud.read('/anuncios', '', `?Id_usuario=${this.idUsuario}`)
      .then((res:any[]) => {
        // console.log(res)
        for (let i = 0; i< res.length; i++){
          this.idAnuncios.push( res[i].Id_anuncio )
        }
        // console.log(this.idAnuncios)
      })
  }

  getPedidos():void{
    this.crud.read('/pedidos', '', `?Id_cliente=${this.idUsuario}`)
      .then( (res:any) => {

        for(let i = 0; i< res.length; i++){
          this.idPedidos.push(res[i].Id_pedido)
        }
        // console.log(this.idPedidos)
      })
  }

  getEndereco(id:number):void{
    this.crud.read('/endereco', '', `?Id_usuario=${id}`)
      .then( (res:any) =>{
        this.localUsuario = res[0].bairro
      } )

  }

  //função que muda a seção aparente no perfil
  mudarSecao(index:number):void{
    if(index == 0){
      this.secaoIndex = 0;
    }
    else if(index == 1){
      this.secaoIndex = 1;
    }
    else if(index == 2){
      this.secaoIndex = 2;
    }
  }

  //Determina qual seção fica em destaque na navegação
  //P.S: Gambiarra pura, favor não julgar
  selecionarA():string | undefined{
    if(this.secaoIndex == 0){
      return 'selecionado';
    }else{
      return ''
    }
  }
  selecionarB():string | undefined{
    if(this.secaoIndex == 1){
      return 'selecionado';
    }else{
      return ''
    }
  }
  selecionarC():string | undefined{
    if(this.secaoIndex == 2){
      return 'selecionado';
    }else{
      return ''
    }
  }

}

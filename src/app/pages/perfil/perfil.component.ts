import { Component, OnInit} from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  // dados importantes
  loggedUser: string | null = JSON.parse(localStorage.getItem('userId') || '{}')
  idUsuario:string | null = ''
  private dadosUsuario:any = '';
  
  // dados de preenchimento da tela
  url_fotoUsuario:string = '../../../assets/thumbnails/default-book_thumbnail.png'
  nome_usuario:string = 'Nome do Usuário'
  localUsuario:string = 'Local dos Anúncios'

  tela:string = ''
  
  //Avaliação
  mediaAvaliacao:number = 0
  
  idAnuncios:number[] = []
  idPedidos:number[] = []

  //index da seção inicial do perfil
  secaoIndex:number = 0
  
  constructor(
    private crud:CrudService,
    private login:LoginService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.login.isLoggedIn()

    //recolhendo ids da rota
    this.route.paramMap.subscribe( (value) =>{
      this.idUsuario = value.get('id')
    });

    //coletando dados do usuario
    this.crud.read('/users', this.idUsuario, "")
      .then( (res:JSON) => {
        this.dadosUsuario = res
        let foto = this.dadosUsuario[0].fotoUsuario
      
        let mediaAval = this.dadosUsuario[0].mediaAvaliacao
        this.mediaAvaliacao = (mediaAval != null)? mediaAval : 0
        this.nome_usuario = this.dadosUsuario[0].nome

        let sebo = this.isSebo(this.idUsuario)

        this.url_fotoUsuario = (foto != null)? foto : '../../../assets/thumbnails/default-book_thumbnail.png'
        this.getEndereco(this.dadosUsuario[0].Id_usuario);
      })
    
    this.getAnuncios()
    this.getPedidos()

    //adaptar de acordo com user em login
    this.tela = (this.idUsuario == this.loggedUser)? 'container' : 'outroUser'
  } 

  // Descobrindo se o usuário é um sebo ou não
  isSebo(id:string | null):void{
    this.crud.read('/users',``,`?get_Sebos=sim&idSebo=${id}`)
      .then( (res:any) => {
        if(res.length != 0){
          this.url_fotoUsuario = '../../../assets/thumbnails/Capa_sebos.png'
        }
      }) 
  }

  // coletando todos os anúncios do usuário no banco e os salva numa array 
  getAnuncios():void{
    this.crud.read('/anuncios', '', `?Id_usuario=${this.idUsuario}`)
      .then((res:any[]) => {
        for (let i = 0; i< res.length; i++){

          if(res[i].anuncio_status == 'aberto'){
            this.idAnuncios.push( res[i].Id_anuncio )
          }
        }
      })
  }

  // coletando todos os pedidos do usuário
  getPedidos():void{
    this.crud.read('/pedidos', '', `?Id_cliente=${this.idUsuario}`)
      .then( (res:any) => {
        
        for(let i = 0; i< res.length; i++){
          this.idPedidos.push(res[i].Id_pedido)
        }
      })
  }

  //pegando o endereço do usuário
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

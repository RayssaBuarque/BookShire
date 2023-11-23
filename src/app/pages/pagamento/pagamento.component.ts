import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud/crud.service';
import { SetLivroService } from 'src/app/services/set-livro.service';

import { userData } from 'src/assets/data/user_data';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  //VARIÁVEIS DE CONEXÃO COM O BANCO
  idAnuncio:string|null = ''
  idLivro:string|null = ''

  //VARIÁVEIS DE IFORMAÇÃO SOBRE O LIVRO
  urlFotoLivro:string = '../../../assets/thumbnails/default-book_thumbnail.png'
  tituloLivro!:string

  //criando uma variável pra colocar a classe de visibilidade
  view_endereco_entrega:string = 'aparecendo'
  view_cartao:string = 'escondido'
  popUp_novo_cartao:string = 'escondido'
  view_pagamento_finalizado:string = 'escondido'
  seta_voltar_principal:string = 'aparecendo'
  seta_voltar_:string = 'escondido'

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private crud:CrudService,
    private setter:SetLivroService) { }

  ngOnInit(): void {
    //recolhendo ids da rota
    this.route.paramMap.subscribe( (value) =>{
      this.idAnuncio = value.get('idAnuncio')
      this.idLivro = value.get('idLivro')
    });

    // this.prosseguir()
  }

  prosseguir(){
    let idVendedor = ''
    let idUsuario= userData.userId
    
    this.crud.read('/anuncios', this.idAnuncio, "")
    .then( (res:any) => {
      idVendedor = res[0].Id_usuario
    }).then( (ress:any) =>{

      //atualizando status do livro no bd
      let vBody = {
        "anuncio_status": "em andamento"
      }
      this.crud.update('/anuncios', `${this.idAnuncio}`, vBody)
      
      //registrando pedido no bd
      let body = {
        "Id_anunciante": `${idVendedor}`,
        "Id_cliente": `${idUsuario}`,
        "Id_anuncio": `${this.idAnuncio}`
      }
      
      this.crud.create('/pedidos', '', body)
        .then((r:any) => {
          //mudando a view de pagamento
          this.mudar_view_pagamento_finalizado();
        }) 
      
      // this.router.navigate([`../chat`]);

    })
  }

  //FUNÇÃO QUE MUDA A CLASSE DE VISIBILIDADE
  mudar_view_endereco_entrega(){
    //mostra a entrega
    this.view_cartao = 'aparecendo'
    //esconde o endereco
    this.view_endereco_entrega = 'escondido'

    this.seta_voltar_ = 'aparecendo'

    this.seta_voltar_principal = 'escondido'

    // Coletando informações sobre o livro para tela final
    this.setter.setLivro(this.idLivro) 
      .then((res:any) => {
        this.tituloLivro = res.titulo
        
        if (res.urlImg){
          this.urlFotoLivro = res.urlImg
        }
      })
    
  }
  popUp_view_novo_cartao() {

      this.popUp_novo_cartao = 'aparecendo'
  
  }
  popUp_esconder_novo_cartao(){

    this.popUp_novo_cartao = 'escondido'

  }
  mudar_view_pagamento_finalizado(){

    this. view_pagamento_finalizado = 'aparecendo'

    this.view_endereco_entrega = 'escondido'

    this.view_cartao = 'escondido'

    this.seta_voltar_ = 'escondido'

    this.seta_voltar_principal = 'escondido'

  }
  seta_voltar(){

    if(this.view_cartao === 'aparecendo'){

        this.view_endereco_entrega = 'aparecendo'

        this.view_cartao = 'escondido'

    }
    
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';
import { SetLivroService } from 'src/app/services/set-livro.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: [
    './pedido.component.css',
  ]
})
export class PedidoComponent implements OnInit {
    //criando uma variável pra colocar a classe de visibilidade
    view_botoes_confirmar:string = 'escondido'
    view_entregar:string = 'aparecendo'

  @Input() idPedido:string = 'Id do pedido'
  idCliente:string = "Id do Cliente"
  idAnunciante!:string

  nomeAnunciante:string = "Nome do Anunciante"
  transacao:string = 'Transação'
  tituloLivro:string = 'Título do Livro'
  urlImg:string = '../../../../assets/thumbnails/default-book_thumbnail.png'

  // indicadores de interaçã
  processoDenuncia:string = 'escondido';
  processoAvaliacao:boolean = false

  constructor(
    private setter:SetLivroService,
    private crud:CrudService
  ) { }

  ngOnInit(): void {
    
    // verificando dados do pedido
    this.crud.read('/pedidos', '', `?Id_pedido=${this.idPedido}`)
      .then( (res:any) => {
        this.idCliente = res[0].Id_cliente
        this.idAnunciante = res[0].Id_anunciante
        
        if(res[0].dataConclusao != null){
          this.view_entregar = 'escondido'
          this.view_botoes_confirmar = 'aparecendo'
        }

        let idAnuncio = res[0].Id_anuncio
        this.getAnuncio(idAnuncio)
      })
  }
  
  //função para mudar a visibilidade das divs
  mudar_view_confirmar(){

    //botão deseja entregar?
    this.view_entregar = 'escondido'
    //botão para confirmar entrega
    this.view_botoes_confirmar = 'aparecendo'
    
  }

  // Função que joga o POPUP da denúncia na tela
  popDenuncia():void{
    this.processoDenuncia = 'aparecendo';
  }

  // Função que abre processo de CONFIRMAÇÃO DE ENTREGA no banco
  confirmar_entrega():void{
    this.processoAvaliacao = true
  }

  getAnuncio(idAnuncio:string):void{
    this.crud.read('/anuncios', idAnuncio, '')
      .then( (res:any) => {
        this.transacao = res[0].transacao

        this.crud.read('/users', res[0].Id_usuario, '')
          .then( (re:any) => {
            let nome = re[0].nome.split(' ')
            this.nomeAnunciante = nome[0] + ' ' + nome[nome.length - 1]
          })

        this.setter.setLivro(res[0].Id_livro)
          .then( (r:any) => {
            this.tituloLivro = r.titulo
            this.urlImg = r.urlImg
          })
      })
  }

  

}

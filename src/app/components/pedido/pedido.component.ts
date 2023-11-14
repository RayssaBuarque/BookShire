import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';
import { SetLivroService } from 'src/app/services/set-livro.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
    //criando uma variável pra colocar a classe de visibilidade
    view_botoes_confirmar:string = 'escondido'
    view_entregar:string = 'aparecendo'

  @Input() idPedido:string = 'Id do pedido'
  private idCliente:string = "Id do Cliente"
  nomeAnunciante:string = "Nome do Anunciante"
  transacao:string = 'Transação'
  tituloLivro:string = 'Título do Livro'
  urlImg:string = '../../../../assets/thumbnails/default-book_thumbnail.png'

  // indicador de denúncia
  processoDenuncia:string = 'escondido';

  constructor(
    private setter:SetLivroService,
    private crud:CrudService
  ) { }

  ngOnInit(): void {
    
    this.crud.read('/pedidos', '', `?Id_pedido=${this.idPedido}`)
      .then( (res:any) => {
        this.idCliente = res[0].Id_cliente
        // this.idAnunciante = res[0].Id_anunciante
        // console.log(res)
        
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

import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';
import { SetLivroService } from 'src/app/services/set-livro.service';
import { Livro } from '../../livros/livro-modelo';

@Component({
  selector: 'app-anuncio-thumb',
  templateUrl: './anuncio-thumb.component.html',
  styleUrls: ['./anuncio-thumb.component.css']
})
export class AnuncioThumbComponent implements OnInit {

  idAnunciante!:string
  
  idLivro:string = 'Id do Livro'
  @Input() idAnuncio:string = 'Id do Anúncio'
  @Input() localAnuncio:string = 'Local do anunciante'

  // INFORMAÇÕES SOBRE O LIVRO
  tituloLivro:string = 'Título do Livro'
  urlImgLivro:string = '../../../../assets/thumbnails/default-book_thumbnail.png'
  transacaoData:string = 'Doação/Troca/Preço'

  status:string = 'Aberto'

  // pro processo de Confirmação de entrega
  processoAvaliacao:boolean = false
  idPedido!:String
  nomeCliente:string = 'o cliente'

  constructor(
    private crud:CrudService,
    private setter:SetLivroService) { }

  ngOnInit(): void {
    this.setAnuncio()
  }

  // função que confirma o término de uma transação
  confirmarEntrega():void{
    this.processoAvaliacao = (this.processoAvaliacao == false)? true : false
  }

  // Coletando dados do anúncio
  setAnuncio():void{
    this.crud.read('/anuncios', this.idAnuncio, '')
      .then( (res:any) =>{
        this.idAnunciante = res[0].Id_usuario
        this.idLivro = res[0].Id_livro
        
        if(res[0].transacao == 'Venda'){
          this.transacaoData = `R$ ${Number(res[0].preco).toFixed(2)}`
        }else{
          this.transacaoData = res[0].transacao
        }

        this.setStatus(res[0])
        this.setLivro()
      })
  }

  // Conferindo Status do anúncio
  setStatus(dadosAnuncio:any):void{
    let status = dadosAnuncio.anuncio_status

    this.crud.read('/pedidos', '', `?Id_anuncio=${dadosAnuncio.Id_anuncio}`)
        .then((res:any) => {
          let dataConclusao

          // Coletando dados do pedido pro popUp de avaliação
          for(let i in res){
            if(res[i].dataConclusao != null){
              dataConclusao = res[i].dataConclusao // data de Conclusão
            }
          }

          if(status == 'em andamento'){
            this.status = 'Em andamento'
            this.idPedido = res[0].Id_pedido //Id do pedido

            this.crud.read('/users', res[0].Id_cliente, '')
                .then((r:any) => {
                  let nome = r[0].nome.split(' ')
                  this.nomeCliente = nome[0] + ' ' + nome[nome.length - 1]
                });
          }
          else if(status == 'fechado'){
            const inputDate = new Date(dataConclusao)
            let data = isNaN(inputDate.getTime()) ? 'Invalid date string' : inputDate.toLocaleDateString('en-GB');
            this.status = `Concluído em ${data}`
          }
      });
  }

  setLivro():void{
    // Coletando dados do Livro
    this.setter.setLivro(this.idLivro)
    .then( (info:Livro) => {
        this.tituloLivro = info.titulo

          if(info.urlImg != undefined){
            this.urlImgLivro = info.urlImg
          }
        })
  }

}

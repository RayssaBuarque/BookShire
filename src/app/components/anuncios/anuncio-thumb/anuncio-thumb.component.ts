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

  constructor(
    private crud:CrudService,
    private setter:SetLivroService) { }

  ngOnInit(): void {
    this.setAnuncio()
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

  setStatus(dadosAnuncio:any):void{
    console.log(dadosAnuncio)
    let status = dadosAnuncio.anuncio_status

    if(status == 'em andamento'){
      this.status = 'Em andamento'
    }else if(status == 'fechado'){
      this.crud.read('/pedidos', '', `?Id_anuncio=${dadosAnuncio.Id_anuncio}`)
        .then((res:any) => {
          for(let i in res){
            if(res[i].dataConclusao != null){
              const inputDate = new Date(res[i].dataConclusao)
              let data = isNaN(inputDate.getTime()) ? 'Invalid date string' : inputDate.toLocaleDateString('en-GB');
              this.status = `Concluído em ${data}`
            }
          }
          console.log(res)
        })
    }
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

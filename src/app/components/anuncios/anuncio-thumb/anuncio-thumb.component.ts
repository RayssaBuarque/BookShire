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

  @Input() idAnuncio:string = 'Id do Anúncio'
  idLivro:string = 'Id do Livro'
  tituloLivro:string = 'Título do Livro'
  urlImgLivro:string = '../../../../assets/thumbnails/default-book_thumbnail.png'
  @Input() localAnuncio:string = 'Local do anunciante'
  transacaoData:string = 'Doação/Troca/Preço'

  constructor(private crud:CrudService, private setter:SetLivroService) { }

  ngOnInit(): void {
    this.setAnuncio()
  }

  setAnuncio():void{
    this.crud.read('/anuncios', this.idAnuncio, '')
      .then( (res:any) =>{
        console.log(res)
        this.idLivro = res[0].Id_livro
        
        if(res[0].transacao == 'Venda'){
          this.transacaoData = `R$ ${Number(res[0].preco).toFixed(2)}`
        }else{
          this.transacaoData = res[0].transacao
        }

        this.setter.setLivro(this.idLivro)
          .then( (info:Livro) => {
              this.tituloLivro = info.titulo
    
                if(info.urlImg != undefined){
                  this.urlImgLivro = info.urlImg
                }
              })
      })

  }

  //ANTIGA FUNÇÃO QUE RECOLHIA DADOS DO GOOGLE BOOKS
  // setLivro(Id_livro:string):void{
  //   //Coletando titulo do livro com base no id dele
  //   let fetchApi = fetch(`https://www.googleapis.com/books/v1/volumes/${Id_livro}`)
  //                   .then( (res) => res.json() )
  //                   .then( (res) => {
  //                     this.tituloLivro = res.volumeInfo.title

  //                     try{
  //                       this.urlImgLivro = res.volumeInfo.imageLinks.thumbnail
  //                     }
  //                     catch(error){
                       
  //                     }
  //                   } )
  // }

}

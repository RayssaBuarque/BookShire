import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';

@Component({
  selector: 'app-anuncio-thumb',
  templateUrl: './anuncio-thumb.component.html',
  styleUrls: ['./anuncio-thumb.component.css']
})
export class AnuncioThumbComponent implements OnInit {

  @Input() idLivro:string = 'Id do Livro'
  @Input() idAnuncio:string = 'Id do Anúncio'
  tituloLivro:string = 'Título do Livro'
  urlImgLivro:string = '../../../../assets/thumbnails/default-book_thumbnail.png'
  @Input() localAnuncio:string = 'Local do anunciante'
  transacaoData:string = 'Doação/Troca/Preço'

  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    //Coletando titulo do livro com base no id dele
    let fetchApi = fetch(`https://www.googleapis.com/books/v1/volumes/${this.idLivro}`)
                    .then( (res) => res.json() )
                    .then( (res) => {
                      this.tituloLivro = res.volumeInfo.title
                    } )

    this.setAnuncio();
  }

  setAnuncio():void{
    this.crud.read('/anuncios', this.idAnuncio, '')
      .then( (res:any) =>{
        console.log(res)
        this.transacaoData = res[0].transacao
      } )
  }

}

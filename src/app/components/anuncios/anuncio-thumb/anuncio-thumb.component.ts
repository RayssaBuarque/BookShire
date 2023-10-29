import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio-thumb',
  templateUrl: './anuncio-thumb.component.html',
  styleUrls: ['./anuncio-thumb.component.css']
})
export class AnuncioThumbComponent implements OnInit {

  @Input() idLivro:string = 'Id do Livro'
  tituloLivro:string = 'Título do Livro'
  urlImgLivro:string = '../../../../assets/thumbnails/default-book_thumbnail.png'
  @Input() localAnuncio:string = 'Local do anunciante'
  @Input() transacaoData:string = 'Doação/Troca/Preço'

  constructor() { }

  ngOnInit(): void {
    //Coletando titulo do livro com base no id dele
    let fetchApi = fetch(`https://www.googleapis.com/books/v1/volumes/${this.idLivro}`)
                    .then( (res) => res.json() )
                    .then( (res) => {
                      this.tituloLivro = res.volumeInfo.title
                    } )

  }

}

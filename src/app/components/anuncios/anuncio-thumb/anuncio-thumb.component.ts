import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio-thumb',
  templateUrl: './anuncio-thumb.component.html',
  styleUrls: ['./anuncio-thumb.component.css']
})
export class AnuncioThumbComponent implements OnInit {

  tituloLivro:string = 'Título do Livro'
  urlImgLivro:string = '../../../../assets/thumbnails/default-book_thumbnail.png'
  localAnuncio:string = 'Local do anunciante'
  transacaoData:string = 'Doação/Troca/Preço'

  constructor() { }

  ngOnInit(): void {
  }

}

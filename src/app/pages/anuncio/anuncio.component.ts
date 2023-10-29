import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  tituloLivro:string = 'Título do Livro';
  autorLivro:string = 'Autor do Livro';
  capaLivro:string = '../../../assets/thumbnails/default-book_thumbnail.png'
  infoTransacao:string = 'Informação';
  descricaoLivro:string[] = ['Livro Usado', 'Livro com marcas de uso'];
  sinopseLivro:string = 'Sinopse do Livro kdhfkj sdhkjfhdskjfhksdhf kjdshfkj hdskjfhs dkjhfkjdshfuye iuhfsdkjhfkdjshfkuehfkjhgf akfhkjhdksjhfudshfdsjhd fkjdshfkj';

  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    // this.crud.read('/anuncios', this.)
  }

}

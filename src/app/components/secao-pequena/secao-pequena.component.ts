import { Component, Input, OnInit } from '@angular/core';

//isso daqui dá erro pq Livro é uma classe que precisa de constructor
import { Livro } from '../livros/livro-modelo'
// const livro:Livro = {}

@Component({
  selector: 'app-secao-pequena',
  templateUrl: './secao-pequena.component.html',
  styleUrls: ['./secao-pequena.component.css']
})
export class SecaoPequenaComponent implements OnInit {

  @Input() titulo:string = 'Categoria título'
  livros:Livro[] = [];
  
  constructor() {
    
  }
  
  ngOnInit() {
    this.getLivros()
  }

  getLivros():void {
    let livrosApi = fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${this.titulo}`)
    .then( (res) => res.json())
    .then( (livrosJson) => {
      this.livros.push(...this.convertLivros(livrosJson.items))
      console.log(this.livros)
    })
  }

  convertLivros (list:[]):Livro[] {
    let cache:Livro[] = [];

    for (var index in list) {
      let values:any = list[index];
      let newLivro = new Livro (
        values.id, 
        values.volumeInfo.title,
        values.volumeInfo.description,
        values.volumeInfo.publisher,
        values.volumeInfo.authors
      );

      try{
        newLivro.urlImg = values.volumeInfo.imageLinks.thumbnail
      }catch{ (error:Error) => console.log(error)}

      cache.push(newLivro);
    }

    return cache;
  }

}

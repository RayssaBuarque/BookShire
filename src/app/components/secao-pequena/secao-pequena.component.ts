import { Component, Input, OnInit } from '@angular/core';

//isso daqui dá erro pq Livro é uma classe que precisa de constructor
import { Livro } from '../livros/livro-modelo'
import { ChildrenOutletContexts } from '@angular/router';
// const livro:Livro = {}

@Component({
  selector: 'app-secao-pequena',
  templateUrl: './secao-pequena.component.html',
  styleUrls: ['./secao-pequena.component.css']
})
export class SecaoPequenaComponent implements OnInit {

  @Input() titulo:string = 'Categoria título'
  categoria:string = ''
  private idCategoria:string = ''
  livros:Livro[] = [];
  
  constructor() {
    
  }
  
  ngOnInit() {
    this.categoria = this.titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g,'+');
    // console.log(this.categoria)

    this.getLivros(this.categoria, 7)
  }

  getLivros(categoria:string, maxResults:number):void {
    let categoriasApi = fetch(`https://www.googleapis.com/books/v1/users/114406819052862752801/bookshelves`)
      .then( (res)=> res.json() )
      .then( (colecoes) => colecoes.items)
      .then( (listaCategorias) => {
        for(let i = 0; i<listaCategorias.length; i++){
          if(listaCategorias[i].title == categoria){
            this.idCategoria = listaCategorias[i].id
          }
        }
      }).then( ()=>{
    
        let livrosApi = fetch(`https://www.googleapis.com/books/v1/users/114406819052862752801/bookshelves/${this.idCategoria}/volumes`)
          .then( (res) => res.json())
          .then( (livrosJson) => {
            this.livros.push(...this.convertLivros(livrosJson.items))
            // console.log(this.livros)
          })

        // let livrosApi = fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${categoria}&maxResults=${maxResults}&langRestrict=pt`)
        // .then( (res) => res.json())
        // .then( (livrosJson) => {
        //   this.livros.push(...this.convertLivros(livrosJson.items))
        //   console.log(this.livros)
        // })
      } )

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

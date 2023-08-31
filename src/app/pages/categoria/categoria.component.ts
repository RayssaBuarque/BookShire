import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Livro } from '../../components/livros/livro-modelo'

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() titulo:string = 'Título da Categoria';
  private idCategoria:string | null = 'id da Categoria';
  livros:Livro[] = [];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //pegando o id do projeto na url da pagina
    this.route.paramMap.subscribe( (value) => this.idCategoria = value.get('id') );
  
    this.getLivros_Categoria(this.idCategoria);
  }

  getLivros_Categoria(id:string | null):void{
    let livrosApi = fetch(`https://www.googleapis.com/books/v1/users/114406819052862752801/bookshelves/${id}/volumes`)
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

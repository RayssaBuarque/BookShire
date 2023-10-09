import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/components/livros/livro-modelo';

@Component({
  selector: 'app-pesquisa-resultados',
  templateUrl: './pesquisa-resultados.component.html',
  styleUrls: ['./pesquisa-resultados.component.css']
})
export class PesquisaResultadosComponent implements OnInit {

  pesquisaQuery:string | null = ''
  // private startIndex:number = 0;
  livros:Livro[] = [];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //pegando a Query de pesquisa da rota do URL  
    this.route.paramMap.subscribe( (value) => this.pesquisaQuery = value.get('pesquisaQuery') );
    this.getPesquisa(this.pesquisaQuery);
  }

  getPesquisa(pesquisaTexto:string | null):void{
    let livrosApi = fetch(`https://www.googleapis.com/books/v1/volumes?q=${pesquisaTexto}`)
      .then( (res) => res.json())
      .then( (livrosJson) => {
        this.livros.length = 0;
        this.livros.push(...this.convertLivros(livrosJson.items))
        
        console.log("this.livros", this.livros)
        // console.log(livrosJson)
      });
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

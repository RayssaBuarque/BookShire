import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/components/livros/livro-modelo';

@Component({
  selector: 'app-pesquisa-resultados',
  templateUrl: './pesquisa-resultados.component.html',
  styleUrls: ['./pesquisa-resultados.component.css']
})
export class PesquisaResultadosComponent implements OnInit {

  // define se a pesquisa é em prol de anuúcio ou não
  acesso:string | null = 'bloqueado'

  pesquisaQuery:string | null = ''
  livros:Livro[] = [];

  private startIndex:number = 0;
  private qtdLivros:number = 0;

  constructor(private route:ActivatedRoute, private router : Router) { 
    
    // garantindo que a barra de pesquisa vai funcionar sem re-inicialização da pag
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
  }

  ngOnInit(): void {
    //pegando o acesso da rota do URL
    this.route.paramMap.subscribe( (value) => this.acesso = value.get('acesso') );
    if(this.acesso == null){
      this.acesso = 'bloqueado';
    }

    //pegando a Query de pesquisa da rota do URL  
    this.route.paramMap.subscribe( (value) => this.pesquisaQuery = value.get('pesquisaQuery') );
    this.getPesquisa(this.pesquisaQuery, this.startIndex);
  }

  getPesquisa(pesquisaTexto:string | null, startIndex:number):void{
    let livrosApi = fetch(`https://www.googleapis.com/books/v1/volumes?q=${pesquisaTexto}&maxResults=20&startIndex=${startIndex}`)
      .then( (res) => res.json())
      .then( (livrosJson) => {
        this.livros.length = 0;
        this.livros.push(...this.convertLivros(livrosJson.items))
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

      newLivro.urlImg = 'default'

      //tentando pegar a foto do livro
      try{
        newLivro.urlImg = values.volumeInfo.imageLinks.thumbnail
      }catch{ (error:Error) => console.log(error)}

      //Se a foto não estiver disponível, utilize a default
      if(newLivro.urlImg == 'default'){
        newLivro.urlImg = '../../assets/thumbnails/default-book_thumbnail.png'
      }

      cache.push(newLivro);
    }
    
    return cache;
  }

  //função que avança 20 livros na lista de recomendações
  avancarLista_Livros():void{
    this.startIndex += 20;
    this.getPesquisa(this.pesquisaQuery, this.startIndex);
  }
  
  //função que recua 20 livros na lista de recomendações
  recuarLista_Livros():void{
    if(this.startIndex > 0){
      this.startIndex -= 20;
      this.getPesquisa(this.pesquisaQuery, this.startIndex);
    }
  }

}

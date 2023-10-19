import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Livro } from '../../components/livros/livro-modelo'

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() titulo:string = 'Título da Categoria';
  private idCategoria:string | null = 'id da Categoria';
  private startIndex:number = 0;
  private qtdLivros:number = 0;
  livros:Livro[] = [];

  htmlString:string = `
  <div class="categoria__livros">
    <button *ngFor = "let livro of livros">
      <app-card-livro
      livroTitulo="{{livro.titulo}}"
      urlLivroCapa="{{livro.urlImg}}"
      nomeAutor="{{livro.autores}}"
      ></app-card-livro>
    </button>
  </div>
  `;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   //pegando o id da categoria na url da pagina
    this.route.paramMap.subscribe( (value) => this.idCategoria = value.get('id') );
  
    this.getLivros_Categoria(this.idCategoria, this.startIndex);
    this.getCategoria_Data(this.idCategoria);
  }

  getCategoria_Data(id:string|null):void{
    let apiFetch = fetch(`https://www.googleapis.com/books/v1/users/114406819052862752801/bookshelves/${id}`)
                      .then( (res) => res.json() )
                      .then((dados) => {
                        this.qtdLivros = dados.volumeCount;
                      });
  }

  getLivros_Categoria(id:string | null, startIndex:number) : void{
    let livrosApi = fetch(`https://www.googleapis.com/books/v1/users/114406819052862752801/bookshelves/${id}/volumes?startIndex=${startIndex}&maxResults=20`)
          .then( (res) => res.json())
          .then( (livrosJson) => {
            this.livros.length = 0;
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

  //função que avança 20 livros na lista de recomendações
  avancarLista_Livros():void{
    if( (this.startIndex + 20) < this.qtdLivros){
      this.startIndex += 20;
      this.getLivros_Categoria(this.idCategoria, this.startIndex);
    }
  }
  
  //função que recua 20 livros na lista de recomendações
  recuarLista_Livros():void{
    if(this.startIndex > 0){
      this.startIndex -= 20;
      this.getLivros_Categoria(this.idCategoria, this.startIndex);
    }
  }

}

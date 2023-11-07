import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.css']
})
export class CardLivroComponent implements OnInit {

  @Input() idLivro:string | null = 'Id do Livro'
  @Input() livroTitulo:string = 'Título do livro'
  @Input() urlLivroCapa:string = '../../../../assets/thumbnails/default-book_thumbnail.png'
  @Input() nomeAutor:string = 'Nome do Autor'

  //Gatilho que diferencia busca de criação anúncios
  @Input() acesso:string = 'bloqueado'

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-thumb',
  templateUrl: './livro-thumb.component.html',
  styleUrls: ['./livro-thumb.component.css']
})
export class LivroThumbComponent implements OnInit {

  @Input() idLivro:string | null = 'Id do Livro'
  @Input() tituloLivro:string = 'Título do Livro'
  @Input() livroImg:string = 'url Imagem'

  constructor() {   }

  ngOnInit(): void {
    
  }

}

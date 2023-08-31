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
  }

}

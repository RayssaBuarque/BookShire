import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-anuncios',
  templateUrl: './lista-anuncios.component.html',
  styleUrls: ['./lista-anuncios.component.css']
})
export class ListaAnunciosComponent implements OnInit {

  idLivro: string | null = 'Id do Livro'
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //pegando o id do Livro no url da pagina
    this.route.paramMap.subscribe( (value) => this.idLivro = value.get('idLivro') );
  }

}

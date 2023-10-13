import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categoria-thumbnail',
  templateUrl: './categoria-thumbnail.component.html',
  styleUrls: ['./categoria-thumbnail.component.css']
})
export class CategoriaThumbnailComponent implements OnInit {

  @Input() idCategoria:string = 'idCategoria';
  @Input() nomeCategoria:string = 'Nome da Categoria';
  
  urlCategoria:string = 'url da Capa da Categoria';

  constructor() { }

  ngOnInit(): void {
    this.urlCategoria = `../../../../assets/categorias/${this.idCategoria}.svg`;
  }

}

import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-categoria-thumbnail',
  templateUrl: './categoria-thumbnail.component.html',
  styleUrls: ['./categoria-thumbnail.component.css']
})
export class CategoriaThumbnailComponent implements OnInit, AfterContentInit {

  @Input() idCategoria:string = 'idCategoria';
  @Input() nomeCategoria:string = 'Nome da Categoria';
  @Input() urlAcesso:string = '';
  acesso:string = ''
  
  urlCategoria:string = 'url da Capa da Categoria';

  constructor() {
    
  }
   
   ngOnInit(): void {
     this.urlCategoria = `../../../../assets/categorias/${this.idCategoria}.svg`
    }
    
    // Ciclo de Vida do Angular: APÓS o conteúdo Inicializar
    ngAfterContentInit(): void {
      if(this.urlAcesso != ''){
        this.acesso = `categoria/${this.urlAcesso}/${this.idCategoria}`
      }else{
        this.acesso = `categoria/${this.idCategoria}`
      }
    }

}

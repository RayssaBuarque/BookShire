import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  getPesquisa(pesquisaTexto:string):void{
    console.log(pesquisaTexto)

    let livrosApi = fetch(`https://www.googleapis.com/books/v1/volumes?q=${pesquisaTexto}`)
      .then( (res) => res.json())
      .then( (res) => console.log(res) );
        
  }

}

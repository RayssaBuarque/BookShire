import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vendedor',
  templateUrl: './card-vendedor.component.html',
  styleUrls: ['./card-vendedor.component.css']
})
export class CardVendedorComponent implements OnInit {

  nomeVendedor:string = 'Nome do Vendedor'
  urlFoto:string = 'Url foto do Vendedor'
  notasVendedor:number[] = []
  notaVendedor:number = 5

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i<this.notaVendedor; i++){
      this.notasVendedor.push(this.notaVendedor)
    }
  }

}

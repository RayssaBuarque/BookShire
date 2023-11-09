import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {


  //criando uma variável pra colocar a classe de visibilidade
  view_Endereco:string = 'aparecendo'
  view_Entrega:string = 'escondido'


  constructor() { }

  ngOnInit(): void {
  }


  //FUNÇÃO QUE MUDA A CLASSE DE VISIBILIDADE
  mudar_viewEntrega(){
    //mostra a entrega
    this.view_Entrega = 'aparecendo'

    //esconde o endereco
    this.view_Endereco = 'escondido'
  }

}

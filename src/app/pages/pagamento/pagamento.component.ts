import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {


  //criando uma variável pra colocar a classe de visibilidade
  view_endereco_entrega:string = 'aparecendo'
  view_cartao:string = 'escondido'
  popUp_novo_cartao:string = 'escondido'

  constructor() { }

  ngOnInit(): void {
  }


  //FUNÇÃO QUE MUDA A CLASSE DE VISIBILIDADE
  mudar_view_endereco_entrega(){
    //mostra a entrega
    this.view_cartao = 'aparecendo'
    //esconde o endereco
    this.view_endereco_entrega = 'escondido'
    
  }
  popUp_view_novo_cartao() {

      this.popUp_novo_cartao = 'aparecendo'
  
  }
  popUp_esconder_novo_cartao(){
    this.popUp_novo_cartao = 'escondido'
  }
}

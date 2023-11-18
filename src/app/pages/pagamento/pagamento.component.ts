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
  view_pagamento_finalizado:string = 'escondido'
  seta_voltar_principal:string = 'aparecendo'
  seta_voltar_:string = 'escondido'

  constructor() { }

  ngOnInit(): void {
  }


  //FUNÇÃO QUE MUDA A CLASSE DE VISIBILIDADE
  mudar_view_endereco_entrega(){
    //mostra a entrega
    this.view_cartao = 'aparecendo'
    //esconde o endereco
    this.view_endereco_entrega = 'escondido'

    this.seta_voltar_ = 'aparecendo'

    this.seta_voltar_principal = 'escondido'
    
  }
  popUp_view_novo_cartao() {

      this.popUp_novo_cartao = 'aparecendo'
  
  }
  popUp_esconder_novo_cartao(){

    this.popUp_novo_cartao = 'escondido'

  }
  mudar_view_pagamento_finalizado(){

    this. view_pagamento_finalizado = 'aparecendo'

    this.view_endereco_entrega = 'escondido'

    this.view_cartao = 'escondido'

    this.seta_voltar_ = 'aparecendo'

    this.seta_voltar_principal = 'escondido'

  }
  seta_voltar(){

    if(this.view_cartao === 'aparecendo'){

        this.view_endereco_entrega = 'aparecendo'

        this.view_cartao = 'escondido'

    }
    else if (this.view_pagamento_finalizado === 'aparecendo'){

        this.view_endereco_entrega = 'escondido'

        this.view_cartao = 'aparecendo'

        this.seta_voltar_ = 'aparecendo'

        this.view_pagamento_finalizado = 'escondido'

        this.seta_voltar_principal = 'escondido'

    }

  }
}

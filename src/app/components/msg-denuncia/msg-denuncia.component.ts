import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-denuncia',
  templateUrl: './msg-denuncia.component.html',
  styleUrls: ['./msg-denuncia.component.css']
})
export class MsgDenunciaComponent implements OnInit {

  @Input() transacao = 'transação'
  @Input() usuario = 'Nome do Usuário'

  etapa:number = 1

  visibilidade:string = 'escondido'
  
  constructor() { }

  ngOnInit(): void {
  }

  // determina a visibilidade do popup
  popDenuncia():void{
    this.visibilidade = (this.visibilidade == 'aparecendo')? 'escondido' : 'aparecendo'
  }

  // registra uma denúncia no pedido o banco
  registrar_denuncia():void{
    console.log('A denúncia deve ser registrada aq')
    this.etapa = 2
  }

}

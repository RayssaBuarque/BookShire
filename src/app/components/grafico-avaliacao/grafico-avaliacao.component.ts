import { Component, Input, OnInit } from '@angular/core';

//importando componente bootstrap
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-grafico-avaliacao',
  templateUrl: './grafico-avaliacao.component.html',
})
export class GraficoAvaliacaoComponent implements OnInit {

  @Input('valMax') valorMax:any = "100"
  @Input('qtdN') qtdNotas:any = "50"
  @Input() qtdEstrelas:string = "0"
  
  estrelas:string = ''
  nValorMax:number = Number(this.valorMax)
  nQtdNotas:number = Number(this.qtdNotas)

  demonstracao:boolean = false
  
  constructor() { }
  
  ngOnInit(): void {
    for(let i = 0; i<Number(this.qtdEstrelas); i++){
      this.estrelas += '⭐'
    }
    console.log(this.nQtdNotas)
    console.log(this.nValorMax)
    this.demonstracao = true;
  }

  parseNum(strNum:string):number{
    return Number(strNum)
  }

}

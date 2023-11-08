import { Component, Input, OnInit } from '@angular/core';

//importando componente bootstrap
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-grafico-avaliacao',
  templateUrl: './grafico-avaliacao.component.html',
})
export class GraficoAvaliacaoComponent implements OnInit {

  @Input() valorMax:string = "100"
  @Input() qtdNotas:string = "50"
  @Input() qtdEstrelas:string = "0"
  
  estrelas:string = ''
  nValorMax:number = Number(this.valorMax)
  nQtdNotas:number = Number(this.qtdNotas)

  demonstracao:boolean = false
  
  constructor(private crud:CrudService) { }
  
  ngOnInit(): void {
    for(let i = 0; i<Number(this.qtdEstrelas); i++){
      this.estrelas += '⭐'
    }
    console.log(this.nQtdNotas)
    console.log(this.nValorMax)
    this.demonstracao = true;
  }

}

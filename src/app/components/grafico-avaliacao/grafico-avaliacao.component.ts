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

  @Input() Id_anunciante:string = "2";
  valorMax:any = "100"
  qtdNotas:any = "50"
  qtdEstrelas:string = "0"
  
  estrelas:string = ''
  nValorMax:number = Number(this.valorMax)
  nQtdNotas:number = Number(this.qtdNotas)

  demonstracao:boolean = false
  
  constructor(private crud:CrudService) { }
  
  ngOnInit(): void {
  
    this.crud.read('/anuncios', '', `?Id_usuario=${this.Id_anunciante}`)
      .then((res:any) => {
        // this.valorMax = res[0].
        this.valorMax = res.length
        console.log(res)
      })

    // for(let i = 0; i<Number(this.qtdEstrelas); i++){
    //   this.estrelas += '⭐'
    // }
    // console.log(this.nQtdNotas)
    // console.log(this.nValorMax)
    // this.demonstracao = true;
  }

}

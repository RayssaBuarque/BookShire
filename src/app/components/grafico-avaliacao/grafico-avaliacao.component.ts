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

  @Input() idUsuario:string = "2"

  valorMax!:string
  qtdNotas:number[] = [0, 0, 0, 0, 0]
  qtdEstrelas!:string
  
  nValorMax:number = Number(this.valorMax)
  nQtdNotas:number = 20
  // nQtdNotas:number = Number(this.qtdNotas)

  demonstracao:boolean = false
  
  constructor(private crud:CrudService) { }
  
  ngOnInit(): void {

    // pegando todos os pedidos em que o usuário foi anunciante
    this.crud.read('/pedidos', '', `?Id_anunciante=${this.idUsuario}`)
      .then( (res:any) => {
        this.setNotas(res)
      })

    this.demonstracao = true;
  }

  //definindo o total de avaliações e mapeando as notas
  setNotas(res:any):void{

    this.valorMax = res.length

    for(let i = 0; i<Number(this.valorMax); i++){
      let nota = Number(res[i].notaAvaliacao)

      if(nota == 1){
        this.qtdNotas[0] += 1
      }
      else if(nota == 2){
        this.qtdNotas[1] += 1
      }
      else if(nota == 3){
        this.qtdNotas[2] += 1
      }
      else if(nota == 4){
        this.qtdNotas[3] += 1
      }
      else if(nota == 5){
        this.qtdNotas[4] += 1
      }
    }

  }

}

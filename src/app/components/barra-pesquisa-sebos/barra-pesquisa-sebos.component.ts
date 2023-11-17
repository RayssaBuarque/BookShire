import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa-sebos',
  templateUrl: './barra-pesquisa-sebos.component.html',
  styleUrls: ['./barra-pesquisa-sebos.component.css']
})
export class BarraPesquisaSebosComponent implements OnInit {
  @Input() textoPadraoBarraSebo:string = 'Pesquise um sebo...'

  constructor() { }

  ngOnInit(): void {
  }

}

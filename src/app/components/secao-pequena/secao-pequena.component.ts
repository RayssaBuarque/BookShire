import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secao-pequena',
  templateUrl: './secao-pequena.component.html',
  styleUrls: ['./secao-pequena.component.css']
})
export class SecaoPequenaComponent implements OnInit {

  @Input() titulo:string = 'Título da Seção'
  constructor() {
   }

  ngOnInit(): void {
  }

}

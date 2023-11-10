import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-btn-voltar',
  templateUrl: './btn-voltar.component.html',
  styleUrls: ['./btn-voltar.component.css']
})
export class BtnVoltarComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  voltarAnterior():void{
    this.location.back()
  }

}

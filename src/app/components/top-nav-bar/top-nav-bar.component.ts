import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css','top-nav-bar.responsividade.css']
})
export class TopNavBarComponent implements OnInit {

  top_bar_pc:string = 'escondido'
  top_bar:string = 'aparecendo'

  constructor() { }

  ngOnInit(): void {
  }

}

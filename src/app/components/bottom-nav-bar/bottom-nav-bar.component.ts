import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { userData } from 'src/assets/data/user_data';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.css','bottom-nav-bar.responsividade.css']
})
export class BottomNavBarComponent implements OnInit {

  id = JSON.parse(localStorage.getItem('userId') || '')

  container_navBottom:string = 'aparecendo'
  container__rodape:string = 'escondido'
  container_mensagem:string = 'escondido'

  constructor(RouterModule:RouterModule, activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = JSON.parse(localStorage.getItem('userId') || '')
  }

}

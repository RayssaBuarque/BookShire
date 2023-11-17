import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa-chat',
  templateUrl: './barra-pesquisa-chat.component.html',
  styleUrls: ['./barra-pesquisa-chat.component.css']
})
export class BarraPesquisaChatComponent implements OnInit {
  @Input() textoPadraoBarraChat:string = 'Pesquise por um usuário...'


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-notificacao',
  templateUrl: './card-notificacao.component.html',
  styleUrls: ['./card-notificacao.component.css']
})
export class CardNotificacaoComponent implements OnInit {
  @Input() nomeRemetente:string = "Remetente";

  constructor() { }

  ngOnInit(): void {
  }

}

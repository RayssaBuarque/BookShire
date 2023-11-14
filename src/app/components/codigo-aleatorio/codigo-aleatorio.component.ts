import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo-aleatorio',
  templateUrl: './codigo-aleatorio.component.html',
  styleUrls: ['./codigo-aleatorio.component.css']
})
export class CodigoAleatorioComponent implements OnInit {
  codigoAleatorio:string = ''

  ngOnInit(): void {
    this.gerarCodigoAleatorio()
  }

  gerarCodigoAleatorio(): void {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let codigo = ''

    for (let i = 0; i < 13; i++) {
      const indice = Math.floor(Math.random() * caracteres.length)
      codigo += caracteres.charAt(indice)
    }

    this.codigoAleatorio = codigo
  }
}

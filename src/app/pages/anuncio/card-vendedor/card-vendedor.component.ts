import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-card-vendedor',
  templateUrl: './card-vendedor.component.html',
  styleUrls: ['./card-vendedor.component.css']
})
export class CardVendedorComponent implements OnInit {

  @Input() idVendedor:string = 'Id do Vendedor'
  nomeVendedor:string = 'Nome do Vendedor'
  urlFoto:string = '../../../assets/thumbnails/default_perfil.png'

  //gambiarra pra desenhar estrelinhas
  notasVendedor:number[] = []
  notaVendedor:number = 0

  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    console.log(this.idVendedor)
    this.crud.read('/users', this.idVendedor, '')
      .then( (res:any) => {
        let nome = res[0].nome.split(' ')
        this.nomeVendedor = nome[0] + ' ' + nome[nome.length - 1]
        this.urlFoto = res[0].fotoUsuario
        this.notaVendedor = res[0].mediaAvaliacao
        // console.log(this.notaVendedor)
      })

    for(let i = 0; i<this.notaVendedor; i++){
      this.notasVendedor.push(this.notaVendedor)
    }
  }
}

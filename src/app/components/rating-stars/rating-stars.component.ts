import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent implements OnInit {

  @Input() idUsuario:string = ''
  @Input() idPedido:string = ''

  avaliarForm = this.formBuilder.group({
    // notaAvaliacao: null
    rate: '0'
  }) 

  notaAvaliacao:String = ''

  constructor(
    private crud: CrudService,
    private router:Router,
    private formBuilder:FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  confirmar_entrega():void{

    let body = {
      "notaAvaliacao":`${this.avaliarForm.value.rate}`,
    }

    this.crud.update('/pedidos', this.idPedido, body)
      // .then((r:any) => {
      //   window.location.reload(); //não é o ideal mas dá pro gasto por enquanto
      // })

    // this.router.navigate([`../perfil/${this.idUsuario}`]);
  }

}

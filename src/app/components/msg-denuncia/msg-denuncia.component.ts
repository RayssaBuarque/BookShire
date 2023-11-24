import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud/crud.service';

import { userData } from 'src/assets/data/user_data';

@Component({
  selector: 'app-msg-denuncia',
  templateUrl: './msg-denuncia.component.html',
  styleUrls: ['./msg-denuncia.component.css']
})
export class MsgDenunciaComponent implements OnInit {

  @Input() idPedido:string = '' 
  private Id_usuario:string = userData.userId

  @Input() transacao:string = 'transação'
  @Input() usuario:string = 'Nome do Usuário'
  
  private denunciaBody!:any
  denuncia_status:boolean = false
  etapa:number = 1

  // css
  visibilidade:string = 'escondido'

  // dados do formulário
  denunciarForm = this.formBuilder.group({
    tituloDenuncia: null,
    mensagem: null,
  });
  
  constructor(
    private formBuilder:FormBuilder,
    private crud:CrudService
  ) { }
  
  ngOnInit(): void {
    this.procureDenuncias()
  }
  
  // conferindo se o pedido já recebeu uma denúncia deste usuário
  procureDenuncias():void{
    this.crud.read('/denuncia', this.idPedido, '')
      .then( (res:any) => {
        for(let denuncia of res){
          if(denuncia.Id_usuario == this.Id_usuario){
            this.denuncia_status = true
          }
        }
      })
  }

  // determina a visibilidade do popup
  popDenuncia():void{
    this.visibilidade = (this.visibilidade == 'aparecendo')? 'escondido' : 'aparecendo'
  }
  
  // coleta os dados da denuncia pro registro
  coletaDados():void{
    this.etapa = 3
  }
  
  // registra a denuncia de fato
  registrar_denuncia():void{
    let inpts = this.denunciarForm.value
    this.denunciaBody = {
      "Id_pedido": this.idPedido,
      "Id_usuario": this.Id_usuario,
      "tituloDenuncia": inpts.tituloDenuncia,
      "mensagem": inpts.mensagem
    }
    console.log(this.denunciaBody)
    this.crud.create('/denuncia', '', this.denunciaBody)

    this.etapa = 2
  }

  // cancela a denúncia
  cancelarDenuncia():void{
    this.etapa = 1
    this.popDenuncia()
  }
}

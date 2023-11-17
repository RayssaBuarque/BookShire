import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-sebos-cadastrados-lista',
  templateUrl: './sebos-cadastrados-lista.component.html',
  styleUrls: ['./sebos-cadastrados-lista.component.css']
})
export class SebosCadastradosListaComponent implements OnInit {
  

  @Input() idSebo:string = ''
  nomeSebo:string = 'Sebo'
  localSebo:string = 'Local'
  imagemSebo:string = 'assets/thumbnails/Capa_sebos.png'

  constructor( private crud:CrudService) { }

  // pegando os dados dos sebos
  ngOnInit(): void {
    this.crud.read('/users', this.idSebo, '')
      .then( (res:any) => {
        let foto:any = res[0].fotoUsuario
        this.imagemSebo = (foto != null)? foto : 'assets/thumbnails/Capa_sebos.png'
 
        this.nomeSebo = res[0].nome
        
        //coletando o endereço do sebo
        this.crud.read('/endereco','',`?Id_usuario=${this.idSebo}`)
          .then( (r:any) => {
            this.localSebo = r[0].bairro
          })

      })
  }

}

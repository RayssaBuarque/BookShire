import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-sebo-thumb',
  templateUrl: './sebo-thumb.component.html',
  styleUrls: ['./sebo-thumb.component.css']
})
export class SeboThumbComponent implements OnInit {

  @Input() idSebo:string = 'Id do Sebo'
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

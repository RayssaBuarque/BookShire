import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-sebos-lista',
  templateUrl: './sebos-lista.component.html',
  styleUrls: ['./sebos-lista.component.css']
})
export class SebosListaComponent implements OnInit {

  sebosIds:string[] = []

  constructor( private crud:CrudService) { }

  ngOnInit(): void {
    this.getSebos()
  }

  // Guardando IDs de sebos
  getSebos():void{

    this.crud.read('/users','','?get_Sebos=sim')
      .then((res:any) => {
        for(let i in res){
          this.sebosIds.push(res[i].Id_usuario)
        }
      })

  }

}

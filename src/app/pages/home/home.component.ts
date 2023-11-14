import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';
// import { ReadService } from '../../crud/read.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sebos:any[] = []

  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    this.getSebos()
  }

  // Guardando sebos
  getSebos():void{
    let sebosIds:any[] = []

    this.crud.read('/users','','?get_Sebos=sim')
      .then((res:any) => { //coletando ids de sebos
        for(let i in res){
          sebosIds.push(res[i].Id_usuario)
        }
        return res
      }).then( (res:any) => {//pegando os objetos de sebo com os ids
        for(let j in res){
          this.crud.read('/users',res[j].Id_usuario,'')
            .then( (r:any) => this.sebos.push(r[0]))
        }
      })

  }

}


import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';
// import { ReadService } from '../../crud/read.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','home.responsividade.css']
})

export class HomeComponent implements OnInit {

  sebosIds:any[] = []


  constructor(private crud:CrudService) { }

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


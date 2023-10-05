import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  //variável que carrega os IDs de categorias apresentados
  private idCategorias:string[] = ['1021','1017','1003','1004','1015','1025','1002','1007','1013','1016','1005','1001','1009','1034','1024'];  

  //lista de objetos de categoria
  public categorias:any[] | null = [

  ]
  constructor() { }

  ngOnInit(): void {
    //
    for(let i in this.idCategorias){
      this.getCategoriaDado(this.idCategorias[i]);
    }
  }

  //método que solicita dados específicos da categoria
  getCategoriaDado(id:string|null):void{
    let livrosApi = fetch(`https://www.googleapis.com/books/v1/users/114406819052862752801/bookshelves/${id}`)
      .then( (res) => res.json())
      .then( (res) =>{
        console.log(`o Id dessa estante é ${id}`);
        
        this.categorias?.push({
          id: res.id,
          titulo: res.title
        });
        
        console.log(res)
        console.log(this.categorias)

      }  )
  }

}

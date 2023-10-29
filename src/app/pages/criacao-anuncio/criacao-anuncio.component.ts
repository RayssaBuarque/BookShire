import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SetLivroService } from 'src/app/services/set-livro.service';

@Component({
  selector: 'app-criacao-anuncio',
  templateUrl: './criacao-anuncio.component.html',
  styleUrls: ['./criacao-anuncio.component.css']
})
export class CriacaoAnuncioComponent implements OnInit {

  private idLivro:string | null = 'Id do Livro'
  tituloLivro:string = 'Título do Livro'
  autoresLivro:string[] = []
  urlFoto:string = '../../assets/thumbnails/default-book_thumbnail.png'

  constructor(
    private setter:SetLivroService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    //pegando o Id do livro pelo url da página
    this.route.paramMap.subscribe( (value) => {
      this.idLivro = value.get('idLivro') 
    });

    this.setter.setLivro(this.idLivro)
      .then( (res:any) => {
        console.log(res)
        this.tituloLivro = res.titulo
        
        if(res.urlImg != undefined){
          this.urlFoto = res.urlImg
        }

        if(res.autores.length > 0){
          for(let autor in res.autores){
            this.autoresLivro.push(res.autores[autor])
          }
          console.log(this.autoresLivro)
        }
      })
  }

}

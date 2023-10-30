import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { CrudService } from 'src/app/services/crud/crud.service';
import { Anuncio } from 'src/app/models/anuncio';
import { SetLivroService } from 'src/app/services/set-livro.service';

@Component({
  selector: 'app-lista-anuncios',
  templateUrl: './lista-anuncios.component.html',
  styleUrls: ['./lista-anuncios.component.css']
})
export class ListaAnunciosComponent implements OnInit {

  idLivro: string | null = 'Id do Livro'
  tituloLivro: string = 'Título do Livro'
  lista_anuncios:Anuncio[] = []
  contemAnuncios:boolean = true;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private crud:CrudService,
    private setter:SetLivroService
    ) { }

  ngOnInit(): void {
    //pegando o id do Livro no url da pagina
    this.route.paramMap.subscribe( (value) => this.idLivro = value.get('idLivro') );

    this.setter.setLivro( this.idLivro )
      .then( (res:any) => {
        this.tituloLivro = res.titulo
      })

    //coletando os anúncios registrados do livro
    this.crud.read('/anuncios', '', ("?Id_livro=" + this.idLivro))
      .then( (res:any) => {
        for(let r in res){
          let item = res[r]

          //coletando o local do Usuário
          this.crud.read("/endereco", "", `?Id_usuario=${item.Id_usuario}`)
            .then( (res:any) =>{
              let local = res[0].bairro
              
              this.lista_anuncios.push(new Anuncio(
                item.Id_anuncio,
                item.Id_livro,
                item.Id_usuario,
                item.transacao,
                item.preco,
                item.criacao,
                item.descricao,
                item.situacao,
                local,
                item.status
              ));

            })
        }

        //Conferindo se nenhum anúncio for encontrado
        if(this.lista_anuncios.length == 0){
          this.contemAnuncios = false
        }
      })
  }

  redirectAnunciar():void{
    this.router.navigateByUrl(`anunciar/${this.idLivro}`)
  }

}

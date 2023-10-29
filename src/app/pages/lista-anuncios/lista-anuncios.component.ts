import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrudService } from 'src/app/crud/crud.service';
import { Anuncio } from 'src/app/models/anuncio';

@Component({
  selector: 'app-lista-anuncios',
  templateUrl: './lista-anuncios.component.html',
  styleUrls: ['./lista-anuncios.component.css']
})
export class ListaAnunciosComponent implements OnInit {

  idLivro: string | null = 'Id do Livro'
  lista_anuncios:Anuncio[] = []

  constructor(private route:ActivatedRoute, private crud:CrudService) { }

  ngOnInit(): void {
    //pegando o id do Livro no url da pagina
    this.route.paramMap.subscribe( (value) => this.idLivro = value.get('idLivro') );

    this.crud.read('/anuncios', '', ("Id_livro=" + this.idLivro))
      .then( (res:any) => {
        for(let r in res){
          let item = res[r]
          let local = "Local do Usuário"

          this.crud.read("/users", item.Id_usuario, "")

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
        }
        console.log(this.lista_anuncios)
      })
  }

}

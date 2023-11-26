import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { SetLivroService } from 'src/app/services/set-livro.service';
import { CrudService } from 'src/app/services/crud/crud.service';

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

  lembrete:boolean = false

  // grupo que armazena inputs do formulário
  anunciarForm = this.formBuilder.group({
    //POSSIBILITAR TROCA DO USUARIO NO FUTURO !!!
    Id_usuario: JSON.parse(localStorage.getItem('userId') || ''),
    transacao: null,
    preco : 0,
    descricao : null,
    desc1: null,
    desc2: null,
    desc3: null,
    desc4: null,
    desc5: null,
    desc6: null
  })

  constructor(
    private setter:SetLivroService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder,
    private crud:CrudService
    ) { }

  ngOnInit(): void {
    //pegando o Id do livro pelo url da página
    this.route.paramMap.subscribe( (value) => {
      this.idLivro = value.get('idLivro') 
    });

    // Organiza as informações do Livro na página
    this.setter.setLivro(this.idLivro)
      .then( (res:any) => {
        this.tituloLivro = res.titulo
        
        if(res.urlImg != undefined){
          this.urlFoto = res.urlImg
        }

        if(res.autores.length > 0){
          for(let autor in res.autores){
            this.autoresLivro.push(res.autores[autor])
          }
        }
      })
  }

  // Função de criação de anúncio no banco de dados
  onSubmit():void{
    //cheque se os valores foram preenchidos
    let inpts = this.anunciarForm.value
    if(inpts.descricao == null || inpts.transacao == null || (inpts.transacao == 'Venda' && (inpts.preco == 0 || inpts.preco == null))){
      this.lembrete = true
    }else{
      let situacoes = [inpts.desc1, inpts.desc2, inpts.desc3, inpts.desc4, inpts.desc5, inpts.desc6]
      let situacao = ''
      for(let i in situacoes){
        if(situacoes[i] != null){
          situacao += situacoes[i]
        }
      }

      if(situacao == ''){
        situacao = 'Livro em perfeita condição.'
      }

      // Informações do anúncio
      let body =
        {
        Id_usuario: inpts.Id_usuario,
        Id_livro: this.idLivro,
        transacao : inpts.transacao,
        preco : inpts.preco,
        descricao : inpts.descricao,
        situacao: situacao
        }
      
      this.crud.create('/anuncios', '', body)
        .then( (r) => {
          this.router.navigateByUrl('perfil')
        })
    }

    
    // this.anunciarForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/components/livros/livro-modelo';
import { Anuncio } from 'src/app/models/anuncio';
import { CrudService } from 'src/app/services/crud/crud.service';
import { SetLivroService } from 'src/app/services/set-livro.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  idAnuncio:string | null = "2"
  idLivro:string | null = ""

  tituloLivro:string = 'Título do Livro';
  autorLivro:string[] = [];
  capaLivro:string = '../../../assets/thumbnails/default-book_thumbnail.png'
  sinopseLivro:string = 'Sinopse do Livro kdhfkj sdhkjfhdskjfhksdhf kjdshfkj hdskjfhs dkjhfkjdshfuye iuhfsdkjhfkdjshfkuehfkjhgf akfhkjhdksjhfudshfdsjhd fkjdshfkj';
  
  private dadosAnuncio!:Anuncio
  descricaoLivro:string[] = [];
  idVendedor:string = "0";
  infoTransacao:string = 'Informação';
  interesse:string = 'Negociar'
  localAnuncio:string = 'Local do Anúncio';

  constructor(
    private crud:CrudService,
    private route:ActivatedRoute,
    private setter:SetLivroService
    ) { }

  ngOnInit(): void {
    //recolhendo ids da rota
    this.route.paramMap.subscribe( (value) =>{
      this.idAnuncio = value.get('idAnuncio')
      this.idLivro = value.get('idLivro')
    });
    
    //recolhendo dados do anúncio
    this.getAnuncio()

    //recolhendo e setando dados do Google Books
    this.setter.setLivro(this.idLivro)
    .then( (info:Livro) => {
      this.tituloLivro = info.titulo
      this.sinopseLivro = info.sinopse
          .replace('<p>', '\n')
          .replace('</p>', '')
          .replace('<i>', '')
          .replace('</i>', '')
          .replace('<b>', '')
          .replace('</b>', '')

      if(info.autores != undefined){
        this.autorLivro.push(...info.autores)
      }
      
      if(info.urlImg != undefined){
        this.capaLivro = info.urlImg
      }
    })
  }

  
  getAnuncio():void{
    this.crud.read('/anuncios', this.idAnuncio, "")
      .then( (res:any) => {
        this.dadosAnuncio = new Anuncio(
          res[0].Id_anuncio,
          res[0].Id_livro,
          res[0].Id_usuario,
          res[0].transacao,
          res[0].preco,
          res[0].criacao,
          res[0].descricao,
          res[0].situacao,
          "",
          res[0].anuncio_status
        )
        
        this.idVendedor = this.dadosAnuncio.Id_usuario
        this.descricaoLivro.push(this.dadosAnuncio.descricao);
        
        if(this.dadosAnuncio.transacao == "Venda"){
          this.infoTransacao = `R$ ${Number(this.dadosAnuncio.preco).toFixed(2)}`
          this.interesse = 'Comprar'
        }else{
          this.infoTransacao = this.dadosAnuncio.transacao
        }
        
        //recolhendo dados do vendedor
        this.crud.read('/endereco', '', `?Id_usuario=${this.idVendedor}`)
        .then( (res:any) => {
          this.localAnuncio = res[0].bairro
          this.descricaoLivro.push(`Local do anunciante: ${this.localAnuncio}`);
          })

      })    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/components/livros/livro-modelo';
import { Anuncio } from 'src/app/models/anuncio';
import { CrudService } from 'src/app/services/crud/crud.service';
import { SetLivroService } from 'src/app/services/set-livro.service';

import { userData } from 'src/assets/data/user_data';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  idUsuario:string | null = userData.userId
  idLivro:string | null = ""
  
  tituloLivro:string = 'Título do Livro';
  autorLivro:string[] = [];
  capaLivro:string = '../../../assets/thumbnails/default-book_thumbnail.png'
  sinopseLivro:string = 'Sinopse do Livro kdhfkj sdhkjfhdskjfhksdhf kjdshfkj hdskjfhs dkjhfkjdshfuye iuhfsdkjhfkdjshfkuehfkjhgf akfhkjhdksjhfudshfdsjhd fkjdshfkj';
  
  private dadosAnuncio!:Anuncio
  descricaoLivro:string[] = [];
  idVendedor:string = "0";
  idAnuncio:string | null = ""

  aviso:boolean = false

  infoTransacao:string = 'Informação';
  interesse:string = 'Negociar'
  localAnuncio:string = 'Local do Anúncio';

  constructor(
    private crud:CrudService,
    private router:Router,
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

  // função que abre chat com vendedor OU abre tela de pagamento
  prosseguir():void{
    if(this.interesse == 'Comprar'){
      this.router.navigate([`../anuncios/${this.idLivro}/${this.idAnuncio}/pagamento`]);
    }else{
      //atualizando status do livro no bd
      let vBody = {
        "anuncio_status": "em andamento"
      }
      this.crud.update('/anuncios', `${this.idAnuncio}`, vBody)

      //registrando pedido no bd
      let body = {
        "Id_anunciante": `${this.idVendedor}`,
        "Id_cliente": `${this.idUsuario}`,
        "Id_anuncio": `${this.idAnuncio}`
      }
      
      this.crud.create('/pedidos', '', body)      
      
      this.router.navigate([`../chat`]);
    }
  }

  // "deletando" o anúncio
  removerAnuncio():void{

    this.crud.read('/pedidos', '', `?Id_anuncio=${this.idAnuncio}`)
      .then((res:any) => {
        // checando se existem pedidos sob o anúncio    
        if(res.length == 0){
          let vBody = {
            "anuncio_status": "removido"
          }
          this.crud.update('/anuncios', `${this.idAnuncio}`, vBody)
          // this.router.navigate([`../perfil/${this.idUsuario}`]);  
          this.router.navigate([`../home`]);  
        }else{
          this.aviso = true
        }
      })
  }


  // função que coleta informações do anúncio
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

        this.interesse = (this.idUsuario == this.idVendedor)? 'Remover anúncio' : this.interesse
        
        //recolhendo dados do vendedor
        this.crud.read('/endereco', '', `?Id_usuario=${this.idVendedor}`)
        .then( (res:any) => {
          this.localAnuncio = res[0].bairro
          })

      })    
  }

}

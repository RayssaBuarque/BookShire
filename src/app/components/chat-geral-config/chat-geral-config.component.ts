import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-chat-geral-config',
  templateUrl: './chat-geral-config.component.html',
  styleUrls: ['./chat-geral-config.component.css']
})
export class ChatGeralConfigComponent implements OnInit {

  @Input() idChat!:string
  private idPedido!:string
  private idPessoa!:string

  nomePessoa = 'BookShire'
  fotoPessoa = 'assets/thumbnails/logoBookshire.png'
  assunto = ``

  private transacao!:string
  private tituloLivro!:string

  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    this.setInfo()
  }

  //coletando informação da conversa
  setInfo():void{
    this.crud.read('/chat', `${this.idChat}`, '')
      .then( (res:any) => {
        this.idPedido = res[0].Id_pedido
        this.idPessoa = res[0].Id_usuario1

        this.setPessoa()
        this.setPedido()
      })
  }

  // coletando dados da pessoa da conversa
  setPessoa():void{
    this.crud.read('/users', `${this.idPessoa}`, '')
      .then( (res:any) => {
        let nome = res[0].nome.split(' ')
        this.nomePessoa = nome[0] + ' ' + nome[nome.length - 1]
        this.fotoPessoa = res[0].fotoUsuario
      })
  }

  // coletando dados do pedido da conversa
  setPedido():void{
    this.crud.read('/pedidos', ``, `?Id_pedido=${this.idPedido}`)
      .then( (res:any) => {

        let idAnuncio = res[0].Id_anuncio
        this.crud.read('/anuncios', idAnuncio, '') //identificando o anuncio que gerou a cvs
          .then( (r:any) =>{
            this.transacao = r[0].transacao

            let fetchGoogleApi = fetch(`https://www.googleapis.com/books/v1/volumes/${r[0].Id_livro}`)
              .then( (livro:any) => livro.json())
              .then( (livroData:any) => {
                this.tituloLivro = livroData.volumeInfo.title

                this.assunto = `${this.transacao} de ${this.tituloLivro}`
              })
          })

      })
  }

}

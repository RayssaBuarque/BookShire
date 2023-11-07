import { Injectable } from '@angular/core';
import { Livro } from '../components/livros/livro-modelo';

@Injectable({
  providedIn: 'root'
})
export class SetLivroService {

  constructor() { }

  setLivro(Id_livro:string | null):any{

    //Coletando titulo e imagem do livro com base no id dele
    return fetch(`https://www.googleapis.com/books/v1/volumes/${Id_livro}`)
      .then( (res) => res.json() )
      .then( (res) => {

        let infoLivro =  new Livro(
          res.id,
          res.volumeInfo.title,
          res.volumeInfo.description,
          res.volumeInfo.publisher,
          res.volumeInfo.authors
        )
        
        try{
          //FOTO (se tiver)
          infoLivro.urlImg = res.volumeInfo.imageLinks.thumbnail
        } catch(error){}

        // console.log(infoLivro)
        return infoLivro
      })
  }
}

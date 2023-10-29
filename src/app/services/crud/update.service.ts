import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor() { }

  options = {
    "body": `{
      "nome" : ,
      "email" : ,
      "senha" : ,
      "telefone" : ,
      "fotoUsuario" : 
    }`,
  };

  update(apiUrl:string,baseUrl:string, param:string){
    fetch(`${apiUrl}${baseUrl}${param}`)
    .then( (res) => res.json() )
  }
}

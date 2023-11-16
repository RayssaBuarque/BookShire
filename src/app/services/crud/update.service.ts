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

  update(apiUrl:string, baseUrl:string, param:string, vbody:any){
    let config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 
      },
      body:JSON.stringify(vbody)
    }

    return fetch(`${apiUrl}${baseUrl}${param}`, config)
      .then( (res:any) => res.json() )
  }
}

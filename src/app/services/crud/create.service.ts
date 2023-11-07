import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor() { }

  create(apiUrl:string, baseUrl:string, param:string, vbody:any){
    let vUrl = `${apiUrl}${baseUrl}/${param}`
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body:JSON.stringify(vbody)
    }

    // return fetch(vUrl, vbody)
    return fetch(vUrl, config)
      .then( (res) => res.json())
      .then( (r) => console.log(r))
  }
}

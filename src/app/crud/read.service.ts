import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor() { }
  
  read (apiUrl:string, baseUrl:string, param:string):any{
      
    return fetch(`${apiUrl}${baseUrl}/${param}`)
          .then((res) => res.json())
          // .then( (r) => console.log(r) )
          // .then( (res) => console.log(res) );
  }

}

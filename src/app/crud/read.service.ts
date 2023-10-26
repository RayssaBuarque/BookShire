import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor() { }
  // apiUrl:string = 'https://0un8uy3hp5.execute-api.us-east-1.amazonaws.com/dev'


  read (apiUrl:string, baseUrl:string, param:string):any{
    fetch(`${apiUrl}${baseUrl}${param}`)
        .then( (res) => res.json())
        // .then( (res) => console.log(res) );
  }

}

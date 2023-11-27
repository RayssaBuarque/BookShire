import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Link de conexão do API Gateway do BookShire na AWS
  apiUrl:string = 'https://0un8uy3hp5.execute-api.us-east-1.amazonaws.com/dev'

  constructor( private router:Router ) { }

  isLoggedIn():void{
    if( isNaN(JSON.parse(localStorage.getItem('userId') || '{}')) ){
      this.router.navigate([`../login`]);
    }
  }

  login(baseUrl:string, param:string, vbody:any){
    let vUrl = `${this.apiUrl}${baseUrl}/${param}`
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
      // .then( (r) => return r)
  }
}

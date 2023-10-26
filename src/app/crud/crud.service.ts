import { Injectable } from '@angular/core';
import { ReadService } from './read.service';

@Injectable({
  providedIn: 'root'
})

/*
  Essa classe basicamente reúne todos os serviços
  de crud em uma classe só.

  CRUD:
  - Create
  - Read
  - Update
  - Delete
*/
export class CrudService {

  //Link de conexão do API Gateway do BookShire na AWS
  apiUrl:string = 'https://0un8uy3hp5.execute-api.us-east-1.amazonaws.com/dev'

  //Recuperando módulos de serviço crud
  constructor(private readService:ReadService) { }


  read(baseUrl:string, param:string):any{
    return this.readService.read(this.apiUrl, baseUrl, param);
  }
}

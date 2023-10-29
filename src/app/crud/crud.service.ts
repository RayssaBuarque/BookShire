import { Injectable } from '@angular/core';

// SERVIÇOS INDIVIDUAIS DO CRUD
import { CreateService } from './create.service';
import { ReadService } from './read.service';
import { UpdateService } from './update.service';
import { DeleteService } from './delete.service';

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
  constructor(
    private createService:CreateService,
    private readService:ReadService,
    private updateService:UpdateService,
    private deleteService:DeleteService
    ) { }


  //linkar CREATE

  //linkar READ
  read(baseUrl:string, param:string, query:string):any{
    return this.readService.read(this.apiUrl, baseUrl, param, query);
  }

  //linkar UPDATE
  update(baseUrl:string, param:string):any{
    // return this.readService.read(this.apiUrl, baseUrl, param);
  }

  //linkar DELETE
}

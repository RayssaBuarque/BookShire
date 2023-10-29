import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';
// import { ReadService } from '../../crud/read.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private crud:CrudService) { }

  ngOnInit(): void {
  }

}


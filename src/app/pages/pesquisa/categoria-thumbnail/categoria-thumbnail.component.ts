import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categoria-thumbnail',
  templateUrl: './categoria-thumbnail.component.html',
  styleUrls: ['./categoria-thumbnail.component.css']
})
export class CategoriaThumbnailComponent implements OnInit {

  @Input() idCategoria:string = '';
  @Input() nomeCategoria:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

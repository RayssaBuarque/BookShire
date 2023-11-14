import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sebo-thumb',
  templateUrl: './sebo-thumb.component.html',
  styleUrls: ['./sebo-thumb.component.css']
})
export class SeboThumbComponent implements OnInit {

  @Input() nomeSebo = 'Nome do Sebo'
  constructor() { }

  ngOnInit(): void {
  }

}

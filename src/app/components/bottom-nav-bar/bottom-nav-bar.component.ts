import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.css']
})
export class BottomNavBarComponent implements OnInit {

  constructor(RouterModule:RouterModule, activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}

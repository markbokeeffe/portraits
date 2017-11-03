import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  screens = [
    {
      name:'Portraits',
      path: 'portraits'
    },
    {
      name:'Presentations',
      path: 'presentations'
    },
    {
      name:'About',
      path: 'about'
    },
    {
      name:'Contact',
      path: 'contact'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

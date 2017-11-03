import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  colNum = 6;
  public innerWidth: any;

  constructor() { }

  calculateColumnNumber(){
    this.innerWidth = window.innerWidth;
    if(this.innerWidth < 550){
      this.colNum = 1;
    }
    else if(this.innerWidth < 980){
      this.colNum = 4;
    }
  }

  @HostListener('window:resize', ['$event']) doSomething(){
    this.calculateColumnNumber();
  }

  ngOnInit() {
      this.calculateColumnNumber();

  }

}

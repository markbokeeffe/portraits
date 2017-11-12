import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  colNum = 3;
  public innerWidth: any;

  quotes = [
    {
      quotation: "I greatly appreciate your gift - in both senses of that word",
      person: "Seamus Heaney"
    },
    {
      quotation: "Great job!",
      person: "Al Gore"
    },
    {
      quotation: "Excellent likeness",
      person: "Edmund Hillary"
    },
    {
      quotation: "A great artist",
      person: "Gordon Brown"
    },
  ]

  tiles = [
    {
      path: "assets/portraits/jack-nicholson-portrait-2015.jpg",
      description: "Jack Nicholson"
    },
    {
      path:"assets/portraits/marilynMonroe.jpg",
      description: "Marilyn Monroe"
    },
    {
      path:"assets/portraits/seanMacBride.jpg",
      description: "Sean MacBride"
    },
    {
      path:"assets/portraits/mahatmaGandhi.jpg",
      description: "Mahatma Gandhi"
    },
    {
      path:"assets/presentations/popeBenedict.jpg",
      description: "Pope Benedict XVI"
    },
    {
      path:"assets/presentations/philLynott-smileyBolger.jpg",
      description: "Smiley Bolger"
    },
    {
      path:"assets/presentations/maryMcAleese2009.jpg",
      description: "Mary McAleese"
    }
  ]

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

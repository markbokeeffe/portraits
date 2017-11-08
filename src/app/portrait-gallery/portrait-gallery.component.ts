import { Component, OnInit } from '@angular/core';
import { Injectable }     from '@angular/core';
import { PortraitsService } from 'app/portraits-service.service'

@Component({
  selector: 'app-portrait-gallery',
  templateUrl: './portrait-gallery.component.html',
  styleUrls: ['./portrait-gallery.component.css']
})
export class PortraitGalleryComponent implements OnInit {
  index = 0;
  public descriptions: any;
  caption: any
  constructor(session:PortraitsService) {
    this.descriptions = session;
    this.caption = this.descriptions.data[this.index].name;
}

  ngOnInit() {
    setInterval(() => {
        this.index ++;
        this.caption = this.descriptions.data[this.index].name;
    }, 5000);
  }

}

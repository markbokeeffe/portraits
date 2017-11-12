import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Injectable }     from '@angular/core';
import { PortraitsService } from 'app/portraits-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogPortraitsComponent } from 'app/dialog-portraits/dialog-portraits.component';

@Component({
  selector: 'app-portrait-gallery',
  templateUrl: './portrait-gallery.component.html',
  styleUrls: ['./portrait-gallery.component.css']
})
export class PortraitGalleryComponent implements OnInit {
  public portraits: any;
  portrait: any;
  colNum = 6;
  public innerWidth: any;
  constructor(session:PortraitsService, public dialog: MatDialog) {
    this.portraits = session.data;
  }


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

openDialog(portrait): void {
  let dialog = this.dialog.open(DialogPortraitsComponent);
  let instance = dialog.componentInstance;
  instance.portrait = portrait;
 }

  ngOnInit() {

  }

}

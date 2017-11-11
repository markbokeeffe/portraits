import { Component, OnInit } from '@angular/core';
import { Injectable }     from '@angular/core';
import { PresentationsServiceService } from 'app/presentations-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogPresentationsComponent } from 'app/dialog-presentations/dialog-presentations.component';

@Component({
  selector: 'app-presentation-gallery',
  templateUrl: './presentation-gallery.component.html',
  styleUrls: ['./presentation-gallery.component.css']
})
export class PresentationGalleryComponent implements OnInit {
  public presentations: any;
  presentation: any;
  constructor(session:PresentationsServiceService, public dialog: MatDialog) {
    this.presentations = session.data;
    console.log(this.presentations)
  }

  openDialog(presentation): void {
    let dialog = this.dialog.open(DialogPresentationsComponent);
    let instance = dialog.componentInstance;
    instance.presentation = presentation;
   }

  ngOnInit() {
  }

}

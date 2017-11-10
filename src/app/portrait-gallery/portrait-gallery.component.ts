import { Component, OnInit, Inject } from '@angular/core';
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
  animal: string;
  name: string;
  portrait: any;
  constructor(session:PortraitsService, public dialog: MatDialog) {
    this.portraits = session.data;
}

openDialog(portrait): void {
  let dialog = this.dialog.open(DialogPortraitsComponent);
  let instance = dialog.componentInstance;
  instance.portrait = portrait;
  dialog.afterClosed()
        .subscribe(selection => {
          if (selection) {
            this.portrait = selection;
          } else {
            // User clicked 'Cancel' or clicked outside the dialog
          }
        });
  /**
openDialog(portrait): void {
   let dialogRef = this.dialog.open(PortraitGalleryComponent , {
     width: '250px',
     data: { name: 'portrait.name'}
   });

dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     this.animal = result;
   });**/
 }

  ngOnInit() {

  }

}

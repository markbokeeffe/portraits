import { Component, OnInit, Inject } from '@angular/core';
import { Injectable }     from '@angular/core';
import { PortraitsService } from 'app/portraits-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-portrait-gallery',
  templateUrl: './portrait-gallery.component.html',
  styleUrls: ['./portrait-gallery.component.css']
})
export class PortraitGalleryComponent implements OnInit {
  public portraits: any;
  animal: string;
  name: string;
  constructor(session:PortraitsService, public dialog: MatDialog) {
    this.portraits = session.data;
}

openDialog(portrait): void {
   let dialogRef = this.dialog.open(PortraitGalleryComponent , {
     width: '250px',
     data: { name: 'portrait.name'}
   });

  /** dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     this.animal = result;
   });**/
 }

  ngOnInit() {

  }

}

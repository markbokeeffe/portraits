import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-presentations',
  templateUrl: './dialog-presentations.component.html',
  styleUrls: ['./dialog-presentations.component.css']
})
export class DialogPresentationsComponent implements OnInit {
  presentation;
  constructor(public dialogRef: MatDialogRef<DialogPresentationsComponent>) { }

  ngOnInit() {
  }

}

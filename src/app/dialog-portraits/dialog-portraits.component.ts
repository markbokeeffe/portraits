import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-portraits',
  templateUrl: './dialog-portraits.component.html',
  styleUrls: ['./dialog-portraits.component.css']
})
export class DialogPortraitsComponent implements OnInit {
  portrait;
  constructor(public dialogRef: MatDialogRef<DialogPortraitsComponent>) { }

  ngOnInit() {
  }

}

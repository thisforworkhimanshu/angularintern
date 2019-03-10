import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogoutDialogComponent>) {}

  ngOnInit() {}

  /* These function calls when clicks No on dialog */
  onNoClick() {
    this.dialogRef.close();
  }

  /* These function calls when clicks Yes on dialog */
  onYesClick() {
    this.dialogRef.close();
    window.location.href = '/login';
  }
}

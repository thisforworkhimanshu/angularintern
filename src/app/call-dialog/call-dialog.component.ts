import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { delay } from 'q';

@Component({
  selector: 'app-call-dialog',
  templateUrl: './call-dialog.component.html',
  styleUrls: ['./call-dialog.component.scss']
})
export class CallDialogComponent implements OnInit {

  isCallConnecting: boolean;
  isCallConnected: boolean;
  timeConsumed: any = 0;
  interval: any;
  hhmmss: string;
  constructor(public dialogRef: MatDialogRef<CallDialogComponent>) {
    this.isCallConnecting = true;
    this.isCallConnected = false;
  }

  ngOnInit() {
    (async () => {
      this.isCallConnecting = true;
      this.isCallConnected = false;
      await delay(1000);
      this.isCallConnecting = false;
      this.isCallConnected = true;
      setInterval(() => {
        this.timeConsumed ++;
        this.toHHMMSS();
      }, 1000);
    })();
  }

  toHHMMSS() {
    const date = new Date(null);
    date.setSeconds(this.timeConsumed);
    const hhmmss = date.toISOString().substr(11, 8);
    this.hhmmss = hhmmss;
  }

  /* These function calls when clicks No on dialog */
  onNoClick() {
    this.dialogRef.close();
  }

  /* These function calls when clicks Yes on dialog */
  onYesClick() {
    this.dialogRef.close();
  }

}

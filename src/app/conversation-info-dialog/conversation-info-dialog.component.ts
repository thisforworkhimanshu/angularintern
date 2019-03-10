import { ChatwindowService } from './../services/chatwindow.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-conversation-info-dialog',
  templateUrl: './conversation-info-dialog.component.html',
  styleUrls: ['./conversation-info-dialog.component.scss']
})
export class ConversationInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConversationInfoDialogComponent>, public chatwindowservice: ChatwindowService) {}

  ngOnInit() {}

  /* These function calls when clicks No on dialog */
  onNoClick() {
    this.dialogRef.close();
  }

}

import { MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profile-picture-dialog',
  templateUrl: './profile-picture-dialog.component.html',
  styleUrls: ['./profile-picture-dialog.component.scss']
})
export class ProfilePictureDialogComponent implements OnInit, AfterViewInit {

  @ViewChild('profilepicture') profilepicture: ElementRef;

  constructor(public dialogRef: MatDialogRef<ProfilePictureDialogComponent>) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
  }

  onYesClick(event: any) {
    event.preventDefault();
    console.log('Yes');
    const profilepictureElement = this.profilepicture.nativeElement as HTMLElement;
    profilepictureElement.click();
    this.dialogRef.close();
  }
}

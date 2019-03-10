import { ProfilePictureDialogComponent } from './../profile-picture-dialog/profile-picture-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile_name = '';
  profile_email = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.profile_name = 'Himanshu';
    this.profile_email = 'himanshubhoraniya@yahoo.com';
  }

  /* Opens profile picture dialog */
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';
    const dialogRef = this.dialog.open(ProfilePictureDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onProfileSubmitClick(profileform) {
    console.log(profileform);
    this.profile_name = profileform.name;
  }

}

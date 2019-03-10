import { ChatwindowService } from './../services/chatwindow.service';
import { LogoutDialogComponent } from './../logout-dialog/logout-dialog.component';
import { MatDialog, MatDialogConfig, MatSidenav } from '@angular/material';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  /* references materials side nav */
  @ViewChild('snav') snav: MatSidenav;

  /* have mobile query list for determining breakpoint */
  mobileQuery: MediaQueryList;

  /* stores active link value */
  activeLink: any;

  /* theme changin variable */
  themeOne: Boolean = false;

  /* listens to the mobile query whenever screen size changes */
  private _mobileQueryListener: () => void;

  constructor(public dialog: MatDialog,
    public chatwindowservice: ChatwindowService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public router: Router,
    public activatedRoute: ActivatedRoute) {
    this.mobileQuery = media.matchMedia('(max-width: 599px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    //
  }

  /* opens log out dialog */
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';
    const dialogRef = this.dialog.open(LogoutDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  onHomeLinkClick() {
    this.performWhenNavLinkClick();
  }

  /* when user click active chat link */
  onActiveLinkClick() {
    this.performWhenNavLinkClick();
  }

  /* when user click chat queue link */
  onChatQueueLinkClick() {
    this.performWhenNavLinkClick();
  }

  /* when user clicks team link */
  onTeamLinkClick() {
    this.performWhenNavLinkClick();
  }

  /* when user click history link */
  onHistoryLinkClick() {
    this.performWhenNavLinkClick();
  }

  /* when user click bot user link */
  onBotUsersLinkClicked() {
    this.performWhenNavLinkClick();
  }

  /* when user click profile link */
  onProfileLinkClicked() {
    this.performWhenNavLinkClick();
  }

  private performWhenNavLinkClick() {
    /* closes the side nav when mode type is over */
    if (this.mobileQuery.matches) {
      this.snav.close();
    }
  }

  /* change theme */
  changeTheme(themeNumber) {
    if (themeNumber === 1) {
      this.themeOne = true;
    } else {
      this.themeOne = false;
    }
  }
}

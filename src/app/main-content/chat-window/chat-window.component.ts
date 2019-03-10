import { CallDialogComponent } from './../../call-dialog/call-dialog.component';
import { ConversationInfoDialogComponent } from './../../conversation-info-dialog/conversation-info-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChatwindowService } from './../../services/chatwindow.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent implements OnInit, AfterViewInit, OnDestroy {

  chatData: any = null;
  activeStatus: any;
  toShowInfo: any = true;
  toShowInfoBtn: any = false;
  typedMessage: string;
  emojiPickerShow: boolean;
  scrollNext: any;
  activeLink: any;
  /* first/fresh time scroll to bottom  */
  firstTimeBottomScroll: boolean;
  scrollTopPixel: any;
  @ViewChild('scrollMe') chatThreadContent: ElementRef;

  constructor(public chatwindowservice: ChatwindowService,
    public breakpointObserver: BreakpointObserver,
    public dialog: MatDialog, public router: Router,
    public _location: Location, public activatedRoute: ActivatedRoute) {
    this.emojiPickerShow = false;
    this.toShowInfoBtn = false;
    this.firstTimeBottomScroll = true;
    this.typedMessage = '';
  }

  ngOnInit() {

    /* show only user-info component when active link is other than 3 */
    this.activatedRoute.parent.params.subscribe((params: {navlink: any}) => {
      this.activatedRoute.params.subscribe((paramsChild: {userid: any}) => {
        const userid = parseInt(paramsChild.userid, 10);
        this.chatData = this.chatwindowservice.returnUserObject(params.navlink, userid);
      });

      this.activeLink = params.navlink;
      if ( params.navlink === 'active') {
        this.activeStatus = true;
      } else {
        this.activeStatus = false;
      }

      if (params.navlink !== 'team') {
        this.toShowInfo = true;
      } else {
        this.toShowInfo = false;
      }
    });

    /* View Breakpoint observer */
    this.breakpointObserver
    .observe(['(max-width: 960px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.toShowInfo = false;
        /* Show user-info component when viewport size is greater than 960px else show info button on toolbar */

        if (this.activeLink !== 'team') {
          this.toShowInfoBtn = true;
        } else {
          this.toShowInfoBtn = false;
        }
      } else {
        if (this.activeLink !== 'team') {
          this.toShowInfo = true;
        }
        this.toShowInfoBtn = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  /* opens conversation info dialog */
  openDialog() {
    const dialogRef = this.dialog.open(ConversationInfoDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openCallDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '300px';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(CallDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed Dialog');
    });
  }

  onClose() {
    const currentlyActiveLink = this.activatedRoute.parent.snapshot.params['navlink'];
    this.router.navigate(['/home/' + currentlyActiveLink], {relativeTo: this.activatedRoute});
  }

  scrollToBottom() {
    this.firstTimeBottomScroll = true;
  }

  /* on send button click */
  onSendClicked() {
    if (this.typedMessage.trim().length !== 0 ) {
      this.chatwindowservice.sendChatMessage(this.typedMessage);
      console.log(this.typedMessage);
      this.typedMessage = '';
    }
  }

  addEmoji(event) {
    console.log(event);
    console.log(event.emoji.colons);
    this.typedMessage += event.emoji.colons + ' ';
  }

  /* open or closes emojiPicker */
  showEmojiPicker() {
    this.emojiPickerShow = !this.emojiPickerShow;
  }

  onScroll(event) {
    if (this.chatThreadContent.nativeElement.scrollTop === 0) {
      /* reached to top */
      this.scrollNext = 0;
      this.scrollNext = this.chatThreadContent.nativeElement.scrollHeight;
      this.chatwindowservice.setStartGettingMessageOnScrollToTop(true);
    } else if (this.chatThreadContent.nativeElement.scrollHeight - this.chatThreadContent.nativeElement.scrollTop ===
      this.chatThreadContent.nativeElement.offsetHeight) {
        /* reached to bottom */
    }
  }

  /* scrolls after messages are added from service */
  scrollAfterMessagesAdded() {
    this.firstTimeBottomScroll = false;
    this.scrollTopPixel = this.chatThreadContent.nativeElement.scrollHeight - this.scrollNext;
  }

  ngOnDestroy(): void {
    //
  }

}

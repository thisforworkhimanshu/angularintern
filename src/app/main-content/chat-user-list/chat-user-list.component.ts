import { ChatwindowService } from './../../services/chatwindow.service';
import { MainContentComponent } from './../main-content.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss']
})
export class ChatUserListComponent implements OnInit {

  activelinkName: any;
  activeLink: any = '';
  chatList: any = null;

  constructor(public chatwindowservice: ChatwindowService,
    public activatedRoute: ActivatedRoute, public _location: PlatformLocation) {
      _location.onPopState(() => {
        // on browser back press
      });
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: {navlink: any}) => {
      this.activeLink = params.navlink;
      this.showFunction(params.navlink);
      this.chatwindowservice.setChatUserList(this.activeLink);
    });

    this.chatwindowservice.getchatUserList.subscribe(list => {
      this.chatList = list;
    });

  }

  /* function which sets activelinkname and according to activeLink*/
  showFunction(newActiveLinkNav: any) {
    if (newActiveLinkNav === 'active') {
      this.activelinkName = 'Active Chat';
    } else if (newActiveLinkNav === 'queue') {
      this.activelinkName = 'Chat Queue';
    } else if (newActiveLinkNav === 'team') {
      this.activelinkName = 'Team';
    } else if (newActiveLinkNav === 'history') {
      this.activelinkName = 'History';
    } else if (newActiveLinkNav === 'bot') {
      this.activelinkName = 'Bot Users';
    }
  }

}

import { ChatwindowService } from './../../../services/chatwindow.service';
import { Component, OnInit, Output, EventEmitter, AfterContentChecked, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'q';

@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.scss']
})
export class ChatThreadComponent implements OnInit {

  showSpinner: boolean;

  @Output() scrollAfterMessageAdded = new EventEmitter();
  @Output() scrollToBottom = new EventEmitter();

  messages = [
    {message: 'xyz joined chat', message_type: 'text', sender: 'bot', message_status: 'D', timestamp: 1547885451014},
    {message: 'Messages are now essential part of communication', message_type: 'text',
      sender: 'user', message_status: 'U', timestamp: 1547885451014},
    {message: 'Messages are now essential part of communication', message_type: 'text',
      sender: 'agent', message_status: 'D', timestamp: 1547885451014},
    {message: 'Messages are now essential part of communication', message_type: 'text',
    sender: 'agent', message_status: 'R', timestamp: 1547885451014},
    {message: 'Messages are now essential part of communication', message_type: 'text',
    sender: 'agent', message_status: 'U', timestamp: 1547885451014},
    {message: 'Someone joined chat', message_type: 'info' , needDate: true,
    sender: 'system', timestamp: 1547885451014},
    {message: 'Someone joined chat', message_type: 'info' , needDate: true,
    sender: 'system', timestamp: 1547105451014},
    {message: 'Someone left chat', message_type: 'info' , needDate: false,
    sender: 'system', timestamp: 1547885451014},
    {message: 'Messages are now essential part of communication', message_type: 'text',
    sender: 'agent', message_status: 'U', timestamp: 1547885451014}
  ];

  messagesFromServer = [
    {message: 'xyz joined chat', message_type: 'text', sender: 'bot', message_status: 'D', timestamp: 1547885451014},
    {message: 'Messages are now essential part of communication', message_type: 'text',
      sender: 'user', message_status: 'U', timestamp: 1547885451014},
    {message: 'Messages are now essential part of communication', message_type: 'text',
      sender: 'agent', message_status: 'D', timestamp: 1547885451014},
    {message: 'Messages are now essential part of communication', message_type: 'text',
    sender: 'agent', message_status: 'R', timestamp: 1547885451014},
    {message: 'Messages are now essential part of communication', message_type: 'text',
    sender: 'agent', message_status: 'U', timestamp: 1547885451014},
    {message: 'Someone joined chat', message_type: 'info' , needDate: true,
    sender: 'system', timestamp: 1547885451014},
    {message: 'Someone left chat', message_type: 'info' , needDate: false,
    sender: 'system', timestamp: 1547885451014}
  ];

  messageObject: any;
  subscription: Subscription;
  constructor(public chatwindowservice: ChatwindowService) {
    this.showSpinner = false;
    this.subscription = this.chatwindowservice.getMessage().subscribe(message => { this.addMessage(message); });
    this.chatwindowservice.currentStartGettingMessageOnScrollToTop.subscribe(startGettingMessageOnScrollToTop => {
      if (startGettingMessageOnScrollToTop) {
        /* used async to just set delay, to show spinner */
        (async () => {
          this.showSpinner = true;
          await delay(2000);
          this.addMessageToObject();
        })();
      }
    });
  }

  ngOnInit() {}

  addMessage(newMessage) {
    this.messageObject = {message: newMessage, message_type: 'text',
    sender: 'agent', message_status: 'U', timestamp: 1547885451014};
    this.messages.push(this.messageObject);
    this.scrollToBottom.emit();
  }

  addMessageToObject() {
    this.messagesFromServer.forEach(messageObject => {
      this.messages.unshift(messageObject);
    });
    this.showSpinner = false;
    this.chatwindowservice.setStartGettingMessageOnScrollToTop(false);
    this.scrollAfterMessageAdded.emit();
  }

}

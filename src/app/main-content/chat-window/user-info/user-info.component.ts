import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  chatInfo = {conversationDetails: {totalSession: 10, connectionStatus: 'offline'
  , lastOnline: 150430116041, platform: 'Web', browserInfo: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36' +
  '(KHTML, like Gecko) Ubuntu Chromium/70.0.3538.77Chrome/70.0.3538.77 Safari/537.36'},
  aboutUser: {email: 'abc@yahoo.xyz', firstName: 'Abc', lastName: 'Xyz', country: 'India',
  state: 'Gujarat', city: 'Rajkot', phoneNumber: '1234567898', registrationTime: 150430116041}};

  constructor() { }

  ngOnInit() {}

}

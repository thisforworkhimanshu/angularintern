import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcometext',
  templateUrl: './welcometext.component.html',
  styleUrls: ['./welcometext.component.css']
})
export class WelcometextComponent implements OnInit {

  title: string;
  constructor() {
    this.title = 'Welcome to Floatbot live chat';
   }

  ngOnInit() {
  }

}

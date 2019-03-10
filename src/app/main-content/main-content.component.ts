import { ChatwindowService } from './../services/chatwindow.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {

  toShow: boolean;

  constructor(public router: Router,
    public chatwindowservice: ChatwindowService, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

}

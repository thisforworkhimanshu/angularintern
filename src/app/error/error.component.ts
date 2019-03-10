import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  errormsg: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (parseInt(this.activatedRoute.snapshot.params['errorcode'], 10) === 404) {
      this.errormsg = '404! Not Found';
    }
  }

}

import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm = new FormGroup({
    'emailFormControl': new FormControl('', [
      Validators.required,
      Validators.email,
    ])
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }

  get email() {
    return this.forgotPasswordForm.get('emailFormControl');
  }

  onForgotPasswordFormSubmit() {
    if (!this.forgotPasswordForm.invalid) {
      alert('We have sended you instruction on your inputted email.');
      this.router.navigateByUrl('/login').then(nav => {
        console.log(nav);
      });
    }
  }

}

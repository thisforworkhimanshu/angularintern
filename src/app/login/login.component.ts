import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true;
  loginForm = new FormGroup({
    'emailFormControl': new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    'passwordFormControl': new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])
  });
  constructor(private router: Router) {}

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('emailFormControl');
  }

  get password() {
    return this.loginForm.get('passwordFormControl');
  }

  onLoginFormSubmit() {
    if (!this.loginForm.invalid) {
      window.location.href = '/home';
    }
  }
}

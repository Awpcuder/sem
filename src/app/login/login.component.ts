import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {LoginService} from './loginServices'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    inputEmail: new FormControl('', [Validators.required, Validators.email]),
    inputPassword : new FormControl('', Validators.required)
  });

  loginSubmit() {
    console.log(this.loginForm)
  }

  get Email(): FormControl {
    return this.loginForm.get('inputEmail') as FormControl;
  }

  get Password(): FormControl {
    return this.loginForm.get('inputPassword') as FormControl;
  }
}

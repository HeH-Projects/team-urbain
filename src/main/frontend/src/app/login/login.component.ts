import { Component, OnInit } from '@angular/core';
import { TokenService } from './../services/token.service'

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import "rxjs/add/operator/map";
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User("test@test.com", "Test123");
  loginForm : NgForm;
  badLogin : boolean = false;

  constructor(private _router : Router, private _tokenService : TokenService) { }

  ngOnInit() {
  }

  submit(loginForm : NgForm){
      this.loginForm = loginForm
      this._tokenService.getNewToken(this.user.email, this.user.password, function(token){
          if(token == "error"){
              this.badLogin = true;
          }else{
              this._router.navigate(['/home']);
          }
      }.bind(this));
  }

}

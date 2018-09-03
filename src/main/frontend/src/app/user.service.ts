import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private email

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  setUserLoggedOut() {
      this.isUserLoggedIn = false;
    }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}

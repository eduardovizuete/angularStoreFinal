import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  TOKEN_KEY = 'token';
  CURRENT_USER = 'current_user';
  messages = [];

  constructor( private http: HttpClient ) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get currentUser() {
    return localStorage.getItem(this.CURRENT_USER);
  }

  saveToken( token ) {
    console.log('LoginService localStorage.setItem: ', token);
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  saveCurrentUser( user ) {
    console.log('LoginService localStorage.setItem: ', user);
    localStorage.setItem(this.CURRENT_USER, user);
  }

  saveCurrentUserAndToken(user, token) {
    this.saveCurrentUser(user);
    this.saveToken(token);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.CURRENT_USER);
  }

}

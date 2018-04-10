import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  TOKEN_KEY = 'token';
  messages = [];

  constructor( private http: HttpClient ) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  saveToken( token ) {
    console.log('LoginService localStorage.setItem: ', token);
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

}

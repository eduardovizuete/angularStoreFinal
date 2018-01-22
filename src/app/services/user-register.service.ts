import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { User } from '../models/user';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Injectable()
export class UserRegisterService {

  private userRegisterURL = environment.apiEndpoint
  + environment.apiBase
  + environment.apiVersion
  + environment.apiBase
  + environment.apiUserRegisterUrl;

  constructor(private http: Http) { }

  sendUserRegister(user: User): Promise<User> {
    console.log('User: ' + user);
    return this.http
      .post(this.userRegisterURL, user)
      .toPromise()
      .then(response => response.json().newData as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    if (error instanceof Error) {
      // client side or network error
      console.log('UserRegisterService an error occurred client side', error);
    } else {
      // backend error
      console.log('UserRegisterService an error occurred backend side', error);
    }
    //console.log('UserRegisterService an error occurred', error);
    return Promise.reject(error.message || error);
  }

}

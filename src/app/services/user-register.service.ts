import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { errorHandler } from '@angular/platform-browser/src/browser';

import { User } from '../models/user';
import { AlertService } from './alert.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserRegisterService {

  private userRegisterURL = environment.apiEndpoint
  + environment.apiBase
  + environment.apiVersion
  + environment.apiBase
  + environment.apiUserRegisterUrl;

  constructor (
    private http: HttpClient,
    private alertService: AlertService) { }

  sendUserRegister(user: User): Observable<User> {
    console.log('User: ' + user);
    return this.http
      .post(this.userRegisterURL, user)
      .map(response => response['newData'] as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    if (error instanceof Error) {
      // client side or network error
      console.log('UserRegisterService an error occurred client side', error);
    } else {
      // backend error
      console.log('UserRegisterService an error occurred backend side', error);
    }
    // console.log('UserRegisterService an error occurred', error);
    return Observable.throw(error.message || error);
  }
}

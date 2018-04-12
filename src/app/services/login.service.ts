import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { AlertService } from './alert.service';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  private userLoginURL = environment.apiEndpoint
  + environment.apiBase
  + environment.apiVersion
  + environment.apiBase
  + environment.apiUserLoginUrl;

  constructor(private http: HttpClient,
    private alertService: AlertService,
    private authService: AuthService) { }

    sendUserLogin(user: User): Observable<User> {
      console.log('User: ' + user);
      return this.http
        .post(this.userLoginURL, user)
        .map(response => {
            this.authService.saveCurrentUserAndToken(
              response['user'], response['token']);
            return response;
        })
        .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
      if (error instanceof Error) {
        // client side or network error
        console.log('LoginService an error occurred client side', error);
      } else {
        // backend error
        console.log('LoginService an error occurred backend side', error);
      }
      return Observable.throw(error.message || error);
    }

}

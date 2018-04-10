import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';
import { AlertService } from './alert.service';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable()
export class LoginService {

  private userLoginURL = environment.apiEndpoint
  + environment.apiBase
  + environment.apiVersion
  + environment.apiBase
  + environment.apiUserLoginUrl;

  constructor(private http: Http,
    private alertService: AlertService,
    private authService: AuthService) { }

    sendUserLogin(user: User): Promise<User> {
      console.log('User: ' + user);
      return this.http
        .post(this.userLoginURL, user)
        .toPromise()
        .then(
          response => {
            this.authService.saveToken(response.json().token);
            localStorage.setItem('token', response.json().token);
            return response.json().newData as User;
          })
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      if (error instanceof Error) {
        // client side or network error
        console.log('LoginService an error occurred client side', error);
      } else {
        // backend error
        console.log('LoginService an error occurred backend side', error);
      }
      return Promise.reject(error.message || error);
    }

}

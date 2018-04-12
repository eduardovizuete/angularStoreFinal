import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(
    private userLoginService: LoginService,
    private alertService: AlertService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  post(formulario: FormGroup) {
    this.user = formulario.value as User;
    console.log(this.user);
    // this.userLoginService.sendUserLogin(this.user)
    //   .map(
    //     result => {
    //       this.alertService.putMessage('Login successful', AlertService.ALERT_SUCCESS, true);
    //       this.route.navigate(['/home']);
    //     })
    //   .catch(
    //     error => {
    //       this.alertService.putMessage('Login error', AlertService.ALERT_ERROR, false);
    //       console.log('LoginComponent an error occurred', error);
    //     }
    //   );
    this.userLoginService.sendUserLogin(this.user)
    .subscribe(
      data => {
        this.alertService.putMessage('Login successful', AlertService.ALERT_SUCCESS, true);
        this.route.navigate(['/home']);
      },
      error => {
        this.alertService.putMessage('Login error', AlertService.ALERT_ERROR, false);
        console.log('LoginComponent an error occurred', error);
      }
    );
  }

}

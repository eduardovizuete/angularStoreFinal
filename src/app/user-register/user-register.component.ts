import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { UserRegisterService } from '../services/user-register.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
  providers: [UserRegisterService]
})
export class UserRegisterComponent implements OnInit {
  user: User;

  constructor(
    private userRegisterService: UserRegisterService,
    private alertService: AlertService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  post(formulario: FormGroup) {
    this.user = formulario.value as User;
    console.log(this.user);
    this.userRegisterService.sendUserRegister(this.user)
      .then(
        result => {
          this.alertService.putMessage('Registration successful', AlertService.ALERT_SUCCESS, true);
          this.route.navigate(['/home']);
        })
      .catch(
        error => {
          this.alertService.putMessage('Registration error', AlertService.ALERT_ERROR, false);
          console.log('UserRegisterComponent an error occurred', error);
        }
      );
  }
}

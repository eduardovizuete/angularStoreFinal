import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlertService {
  static ALERT_SUCCESS = 'success';
  static ALERT_ERROR = 'error';

  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next();
        }
      }
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  putMessage(message: string, type: string, keepAfterNavigationChange = false) {
    if (type === AlertService.ALERT_SUCCESS) {
      this.success(message, keepAfterNavigationChange);
    } else if  (type ===  AlertService.ALERT_ERROR) {
      this.error(message, keepAfterNavigationChange);
    }
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: AlertService.ALERT_SUCCESS, text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: AlertService.ALERT_ERROR, text: message });
  }
}

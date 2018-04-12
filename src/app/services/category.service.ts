import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { appConstants } from '../util/app-constants';
import { Category } from '../models/category';
import { CATEGORIES } from './mock-categories';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  private categoryURL = environment.apiEndpoint
                          + environment.apiBase
                          + environment.apiVersion
                          + environment.apiBase
                          + environment.apiCategoryUrl;

  constructor(private http: HttpClient) {}

  getCategories(filter: String): Observable<Category[]> {
    if (filter) {
      filter = appConstants.OP_QUERY + filter;
      this.categoryURL = this.categoryURL + filter;
    }
    console.log('Filter: ' + filter);
    return this.http
      .get(this.categoryURL)
      .map(response => response['categories'] as Category[])
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    if (error instanceof Error) {
      // client side or network error
      console.log('CategoryService an error occurred client side', error);
    } else {
      // backend error
      console.log('CategoryService an error occurred backend side', error);
    }
    return Observable.throw(error.message || error);
  }
}

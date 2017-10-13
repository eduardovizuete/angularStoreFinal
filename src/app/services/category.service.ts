import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { appConstants } from '../util/app-constants';
import { Category } from '../models/category';
import { CATEGORIES } from './mock-categories';

@Injectable()
export class CategoryService {

  private categoryURL = environment.apiEndpoint
                          + environment.apiBase
                          + environment.apiVersion
                          + environment.apiBase
                          + environment.apiCategoryUrl;

  constructor(private http: Http) {}

  getCategories(filter: String): Promise<Category[]> {
    if (filter) {
      filter = appConstants.OP_QUERY + filter;
      this.categoryURL = this.categoryURL + filter;
    }
    console.log('Filter: ' + filter);
    return this.http
      .get(this.categoryURL)
      .toPromise()
      .then(response => response.json().categories as Category[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('CategoryService an error occurred', error);
    return Promise.reject(error.message || error);
  }
}

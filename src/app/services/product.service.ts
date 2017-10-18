import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { appConstants } from '../util/app-constants';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  private productURL = environment.apiEndpoint
  + environment.apiBase
  + environment.apiVersion
  + environment.apiBase
  + environment.apiProductUrl;

  constructor(private http: Http) { }

  getProducts(filter: String): Promise<Product[]> {
    if (filter) {
      filter = appConstants.OP_QUERY + filter;
      this.productURL = this.productURL + filter;
    }
    console.log('Filter: ' + filter);
    return this.http
      .get(this.productURL)
      .toPromise()
      .then(response => response.json().products as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('ProductService an error occurred', error);
    return Promise.reject(error.message || error);
  }

}

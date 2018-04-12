import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { appConstants } from '../util/app-constants';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private productURL = environment.apiEndpoint
  + environment.apiBase
  + environment.apiVersion
  + environment.apiBase
  + environment.apiProductUrl;

  constructor(private http: HttpClient) { }

  getProducts(filter: String): Observable<Product[]> {
    if (filter) {
      filter = appConstants.OP_QUERY + filter;
      this.productURL = this.productURL + filter;
    }
    console.log('Filter: ' + filter);
    return this.http
      .get(this.productURL)
      .map(response => response['products'] as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    if (error instanceof Error) {
      // client side or network error
      console.log('ProductService an error occurred client side', error);
    } else {
      // backend error
      console.log('ProductService an error occurred backend side', error);
    }
    return Observable.throw(error.message || error);
  }

}

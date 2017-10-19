import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { appConstants } from '../util/app-constants';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location) {
    this.route.params.subscribe( params => console.log('params: ', params) );
    this.route.queryParams.subscribe( queries => console.log('queries: ', queries) );
  }

  ngOnInit() {
    let idCategory: string;

    this.route.queryParams
    .filter(params => params.category)
    .subscribe(params => {
      idCategory = params.category;
    });

    console.log('Id Category: ', idCategory);

    if (!idCategory) {
      this.getAllProducts();
    } else {
      this.getProductsByIdCategory(idCategory);
    }
  }

  getAllProducts(): void {
    const sort = appConstants.FIELD_SORT
      + appConstants.OP_EQUAL
      + appConstants.FIELD_NAME;
    const filter = sort;

    this.productService
      .getProducts(filter)
      .then(products => this.products = products);
  }

  getProductsByIdCategory(category: String): void {
    const sort = appConstants.FIELD_SORT
      + appConstants.OP_EQUAL
      + appConstants.FIELD_NAME;
    const catParam = appConstants.FIELD_CATEGORY
      + appConstants.OP_EQUAL
      + category;
    const filter = sort
      + appConstants.OP_AMP
      + catParam;

    this.productService
      .getProducts(filter)
      .then(products => this.products = products);
  }

}

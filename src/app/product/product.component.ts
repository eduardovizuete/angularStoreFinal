import { Component, OnInit } from '@angular/core';

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

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
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

}

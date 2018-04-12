import { Component, OnInit } from '@angular/core';

import { appConstants } from '../util/app-constants';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(): void {
    const sort = appConstants.FIELD_SORT
      + appConstants.OP_EQUAL
      + appConstants.FIELD_NAME;
    const filter = sort;

    this.categoryService
      .getCategories(filter)
      .subscribe(categories => this.categories = categories);
  }

}

import { Component, OnInit } from '@angular/core';

import { appConstants } from '../util/app-constants';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-main-top-categories',
  templateUrl: './main-top-categories.component.html',
  styleUrls: ['./main-top-categories.component.scss'],
  providers: [CategoryService]
})
export class MainTopCategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getTopCategories();
  }

  getTopCategories(): void {
    const sort = appConstants.FIELD_SORT
      + appConstants.OP_EQUAL
      + appConstants.FIELD_NAME;
    const limit = appConstants.FIELD_LIMIT
      + appConstants.OP_EQUAL
      + appConstants.LIMIT_TOP_CATEGORIES;
    const filter = sort + appConstants.OP_AMP + limit;

    this.categoryService
      .getCategories(filter)
      .map(categories => this.categories = categories)
      .subscribe();
  }
}

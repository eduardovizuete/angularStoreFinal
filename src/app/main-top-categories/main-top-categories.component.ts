import { Component, OnInit } from '@angular/core';

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

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  	this.getCategories();
  }

  getCategories(): void {
  	this.categoryService.getCategories().then(categories => this.categories = categories);
  }

}

import { Injectable } from '@angular/core';

import { Category } from '../models/category';
import { CATEGORIES } from './mock-categories';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Promise<Category[]> {
  	return Promise.resolve(CATEGORIES);
  }

}

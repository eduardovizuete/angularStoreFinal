import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: MainComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'products', component: ProductComponent },
  { path: 'userRegister', component: UserRegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

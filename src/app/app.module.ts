import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MainDetailComponent } from './main-detail/main-detail.component';
import { MainTopCategoriesComponent } from './main-top-categories/main-top-categories.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

import { AppRoutingModule } from './app-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    MainDetailComponent,
    MainTopCategoriesComponent,
    CategoryComponent,
    ProductComponent,
    UserRegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopCategoriesComponent } from './main-top-categories.component';

describe('MainTopCategoriesComponent', () => {
  let component: MainTopCategoriesComponent;
  let fixture: ComponentFixture<MainTopCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTopCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

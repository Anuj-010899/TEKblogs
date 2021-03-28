import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsByCategoryComponent } from './blogs-by-category.component';

describe('BlogsByCategoryComponent', () => {
  let component: BlogsByCategoryComponent;
  let fixture: ComponentFixture<BlogsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

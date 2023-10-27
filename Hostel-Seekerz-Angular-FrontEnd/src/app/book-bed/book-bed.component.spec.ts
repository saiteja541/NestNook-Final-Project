import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBedComponent } from './book-bed.component';

describe('BookBedComponent', () => {
  let component: BookBedComponent;
  let fixture: ComponentFixture<BookBedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookBedComponent]
    });
    fixture = TestBed.createComponent(BookBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

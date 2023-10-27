import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHostelComponent } from './add-hostel.component';

describe('AddHostelComponent', () => {
  let component: AddHostelComponent;
  let fixture: ComponentFixture<AddHostelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHostelComponent]
    });
    fixture = TestBed.createComponent(AddHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

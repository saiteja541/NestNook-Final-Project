import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHostelComponent } from './update-hostel.component';

describe('UpdateHostelComponent', () => {
  let component: UpdateHostelComponent;
  let fixture: ComponentFixture<UpdateHostelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHostelComponent]
    });
    fixture = TestBed.createComponent(UpdateHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

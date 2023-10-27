import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelListComponent } from './hostel-list.component';

describe('HostelListComponent', () => {
  let component: HostelListComponent;
  let fixture: ComponentFixture<HostelListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostelListComponent]
    });
    fixture = TestBed.createComponent(HostelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageinstituteComponent } from './manageinstitute.component';

describe('ManageinstituteComponent', () => {
  let component: ManageinstituteComponent;
  let fixture: ComponentFixture<ManageinstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageinstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageinstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

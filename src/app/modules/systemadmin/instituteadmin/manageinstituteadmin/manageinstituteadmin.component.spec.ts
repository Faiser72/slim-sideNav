import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageinstituteadminComponent } from './manageinstituteadmin.component';

describe('ManageinstituteadminComponent', () => {
  let component: ManageinstituteadminComponent;
  let fixture: ComponentFixture<ManageinstituteadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageinstituteadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageinstituteadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

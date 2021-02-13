import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinstituteadminComponent } from './addinstituteadmin.component';

describe('AddinstituteadminComponent', () => {
  let component: AddinstituteadminComponent;
  let fixture: ComponentFixture<AddinstituteadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinstituteadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinstituteadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInstituteAdminComponent } from './view-institute-admin.component';

describe('ViewInstituteAdminComponent', () => {
  let component: ViewInstituteAdminComponent;
  let fixture: ComponentFixture<ViewInstituteAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInstituteAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInstituteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

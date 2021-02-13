import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstituteAdminComponent } from './edit-institute-admin.component';

describe('EditInstituteAdminComponent', () => {
  let component: EditInstituteAdminComponent;
  let fixture: ComponentFixture<EditInstituteAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstituteAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstituteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

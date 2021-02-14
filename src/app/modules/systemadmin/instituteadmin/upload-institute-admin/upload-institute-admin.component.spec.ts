import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInstituteAdminComponent } from './upload-institute-admin.component';

describe('UploadInstituteAdminComponent', () => {
  let component: UploadInstituteAdminComponent;
  let fixture: ComponentFixture<UploadInstituteAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadInstituteAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadInstituteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

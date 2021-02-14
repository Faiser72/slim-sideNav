import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInstituteComponent } from './upload-institute.component';

describe('UploadInstituteComponent', () => {
  let component: UploadInstituteComponent;
  let fixture: ComponentFixture<UploadInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

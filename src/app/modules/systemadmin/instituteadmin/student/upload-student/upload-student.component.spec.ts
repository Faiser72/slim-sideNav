import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStudentComponent } from './upload-student.component';

describe('UploadStudentComponent', () => {
  let component: UploadStudentComponent;
  let fixture: ComponentFixture<UploadStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

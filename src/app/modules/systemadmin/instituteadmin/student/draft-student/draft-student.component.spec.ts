import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftStudentComponent } from './draft-student.component';

describe('DraftStudentComponent', () => {
  let component: DraftStudentComponent;
  let fixture: ComponentFixture<DraftStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

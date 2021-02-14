import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftTeachersComponent } from './draft-teachers.component';

describe('DraftTeachersComponent', () => {
  let component: DraftTeachersComponent;
  let fixture: ComponentFixture<DraftTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

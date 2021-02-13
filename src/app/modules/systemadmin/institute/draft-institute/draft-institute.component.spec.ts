import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftInstituteComponent } from './draft-institute.component';

describe('DraftInstituteComponent', () => {
  let component: DraftInstituteComponent;
  let fixture: ComponentFixture<DraftInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

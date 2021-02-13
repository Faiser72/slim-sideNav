import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditkeysComponent } from './editkeys.component';

describe('EditkeysComponent', () => {
  let component: EditkeysComponent;
  let fixture: ComponentFixture<EditkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

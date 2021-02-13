import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkeysComponent } from './addkeys.component';

describe('AddkeysComponent', () => {
  let component: AddkeysComponent;
  let fixture: ComponentFixture<AddkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

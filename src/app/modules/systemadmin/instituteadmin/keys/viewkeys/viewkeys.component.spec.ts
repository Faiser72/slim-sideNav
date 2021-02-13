import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewkeysComponent } from './viewkeys.component';

describe('ViewkeysComponent', () => {
  let component: ViewkeysComponent;
  let fixture: ComponentFixture<ViewkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

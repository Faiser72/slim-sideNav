import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagekeysComponent } from './managekeys.component';

describe('ManagekeysComponent', () => {
  let component: ManagekeysComponent;
  let fixture: ComponentFixture<ManagekeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagekeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagekeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

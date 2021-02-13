import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageinstitutenewComponent } from './manageinstitutenew.component';

describe('ManageinstitutenewComponent', () => {
  let component: ManageinstitutenewComponent;
  let fixture: ComponentFixture<ManageinstitutenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageinstitutenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageinstitutenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

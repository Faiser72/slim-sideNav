import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinstitutenewComponent } from './editinstitutenew.component';

describe('EditinstitutenewComponent', () => {
  let component: EditinstitutenewComponent;
  let fixture: ComponentFixture<EditinstitutenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditinstitutenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinstitutenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

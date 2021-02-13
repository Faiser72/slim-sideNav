import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinstitutenewComponent } from './addinstitutenew.component';

describe('AddinstitutenewComponent', () => {
  let component: AddinstitutenewComponent;
  let fixture: ComponentFixture<AddinstitutenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinstitutenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinstitutenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

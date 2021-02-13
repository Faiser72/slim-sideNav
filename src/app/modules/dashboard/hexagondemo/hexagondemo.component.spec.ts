import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagondemoComponent } from './hexagondemo.component';

describe('HexagondemoComponent', () => {
  let component: HexagondemoComponent;
  let fixture: ComponentFixture<HexagondemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagondemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagondemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

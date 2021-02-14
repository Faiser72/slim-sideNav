import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadKeysComponent } from './upload-keys.component';

describe('UploadKeysComponent', () => {
  let component: UploadKeysComponent;
  let fixture: ComponentFixture<UploadKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

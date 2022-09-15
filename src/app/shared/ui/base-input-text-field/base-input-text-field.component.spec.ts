import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputTextFieldComponent } from './base-input-text-field.component';

describe('BaseInputTextFieldComponent', () => {
  let component: BaseInputTextFieldComponent;
  let fixture: ComponentFixture<BaseInputTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseInputTextFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInputTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

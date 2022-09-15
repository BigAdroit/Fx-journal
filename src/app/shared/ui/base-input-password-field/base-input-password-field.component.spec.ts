import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputPasswordFieldComponent } from './base-input-password-field.component';

describe('BaseInputPasswordFieldComponent', () => {
  let component: BaseInputPasswordFieldComponent;
  let fixture: ComponentFixture<BaseInputPasswordFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseInputPasswordFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInputPasswordFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

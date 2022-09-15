import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputFileFieldComponent } from './base-input-file-field.component';

describe('BaseInputFileFieldComponent', () => {
  let component: BaseInputFileFieldComponent;
  let fixture: ComponentFixture<BaseInputFileFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseInputFileFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInputFileFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

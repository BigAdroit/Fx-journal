import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDobComponent } from './edit-dob.component';

describe('EditDobComponent', () => {
  let component: EditDobComponent;
  let fixture: ComponentFixture<EditDobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverageComponent } from './leverage.component';

describe('LeverageComponent', () => {
  let component: LeverageComponent;
  let fixture: ComponentFixture<LeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

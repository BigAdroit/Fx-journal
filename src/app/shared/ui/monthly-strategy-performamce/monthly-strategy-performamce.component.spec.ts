import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyStrategyPerformamceComponent } from './monthly-strategy-performamce.component';

describe('MonthlyStrategyPerformamceComponent', () => {
  let component: MonthlyStrategyPerformamceComponent;
  let fixture: ComponentFixture<MonthlyStrategyPerformamceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyStrategyPerformamceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyStrategyPerformamceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeframeMonthlyPerformanceComponent } from './timeframe-monthly-performance.component';

describe('TimeframeMonthlyPerformanceComponent', () => {
  let component: TimeframeMonthlyPerformanceComponent;
  let fixture: ComponentFixture<TimeframeMonthlyPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeframeMonthlyPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeframeMonthlyPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

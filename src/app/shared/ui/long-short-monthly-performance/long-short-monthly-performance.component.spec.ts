import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongShortMonthlyPerformanceComponent } from './long-short-monthly-performance.component';

describe('LongShortMonthlyPerformanceComponent', () => {
  let component: LongShortMonthlyPerformanceComponent;
  let fixture: ComponentFixture<LongShortMonthlyPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongShortMonthlyPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongShortMonthlyPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

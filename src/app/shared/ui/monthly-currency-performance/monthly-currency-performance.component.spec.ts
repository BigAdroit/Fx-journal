import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCurrencyPerformanceComponent } from './monthly-currency-performance.component';

describe('MonthlyCurrencyPerformanceComponent', () => {
  let component: MonthlyCurrencyPerformanceComponent;
  let fixture: ComponentFixture<MonthlyCurrencyPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyCurrencyPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyCurrencyPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

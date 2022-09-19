import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingSessionMonthlyAnalysisComponent } from './trading-session-monthly-analysis.component';

describe('TradingSessionMonthlyAnalysisComponent', () => {
  let component: TradingSessionMonthlyAnalysisComponent;
  let fixture: ComponentFixture<TradingSessionMonthlyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingSessionMonthlyAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingSessionMonthlyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

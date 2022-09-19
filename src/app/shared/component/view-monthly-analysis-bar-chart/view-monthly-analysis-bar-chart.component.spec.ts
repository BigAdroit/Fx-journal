import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMonthlyAnalysisBarChartComponent } from './view-monthly-analysis-bar-chart.component';

describe('ViewMonthlyAnalysisBarChartComponent', () => {
  let component: ViewMonthlyAnalysisBarChartComponent;
  let fixture: ComponentFixture<ViewMonthlyAnalysisBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMonthlyAnalysisBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMonthlyAnalysisBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

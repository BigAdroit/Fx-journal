import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMonthlyAnalysisComponent } from './view-monthly-analysis.component';

describe('ViewMonthlyAnalysisComponent', () => {
  let component: ViewMonthlyAnalysisComponent;
  let fixture: ComponentFixture<ViewMonthlyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMonthlyAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMonthlyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

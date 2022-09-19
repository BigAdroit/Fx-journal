import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLMonthlyAnalysisComponent } from './p-l-monthly-analysis.component';

describe('PLMonthlyAnalysisComponent', () => {
  let component: PLMonthlyAnalysisComponent;
  let fixture: ComponentFixture<PLMonthlyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLMonthlyAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PLMonthlyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

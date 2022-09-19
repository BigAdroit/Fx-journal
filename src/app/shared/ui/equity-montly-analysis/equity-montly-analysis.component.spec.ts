import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityMontlyAnalysisComponent } from './equity-montly-analysis.component';

describe('EquityMontlyAnalysisComponent', () => {
  let component: EquityMontlyAnalysisComponent;
  let fixture: ComponentFixture<EquityMontlyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquityMontlyAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityMontlyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

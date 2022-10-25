import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityAnalysisComponent } from './equity-analysis.component';

describe('EquityAnalysisComponent', () => {
  let component: EquityAnalysisComponent;
  let fixture: ComponentFixture<EquityAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquityAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

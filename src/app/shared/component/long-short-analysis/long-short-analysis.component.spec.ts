import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongShortAnalysisComponent } from './long-short-analysis.component';

describe('LongShortAnalysisComponent', () => {
  let component: LongShortAnalysisComponent;
  let fixture: ComponentFixture<LongShortAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongShortAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongShortAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

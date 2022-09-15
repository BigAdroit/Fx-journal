import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlestickMasteringComponent } from './candlestick-mastering.component';

describe('CandlestickMasteringComponent', () => {
  let component: CandlestickMasteringComponent;
  let fixture: ComponentFixture<CandlestickMasteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandlestickMasteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandlestickMasteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

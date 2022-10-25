import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradePerCurrencyComponent } from './trade-per-currency.component';

describe('TradePerCurrencyComponent', () => {
  let component: TradePerCurrencyComponent;
  let fixture: ComponentFixture<TradePerCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradePerCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradePerCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

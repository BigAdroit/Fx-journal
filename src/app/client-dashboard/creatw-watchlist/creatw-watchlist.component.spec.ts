import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatwWatchlistComponent } from './creatw-watchlist.component';

describe('CreatwWatchlistComponent', () => {
  let component: CreatwWatchlistComponent;
  let fixture: ComponentFixture<CreatwWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatwWatchlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatwWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

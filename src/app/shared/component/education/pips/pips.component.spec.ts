import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipsComponent } from './pips.component';

describe('PipsComponent', () => {
  let component: PipsComponent;
  let fixture: ComponentFixture<PipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

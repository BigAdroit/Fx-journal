import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexBasicsComponent } from './forex-basics.component';

describe('ForexBasicsComponent', () => {
  let component: ForexBasicsComponent;
  let fixture: ComponentFixture<ForexBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForexBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaculatorsComponent } from './claculators.component';

describe('ClaculatorsComponent', () => {
  let component: ClaculatorsComponent;
  let fixture: ComponentFixture<ClaculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaculatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

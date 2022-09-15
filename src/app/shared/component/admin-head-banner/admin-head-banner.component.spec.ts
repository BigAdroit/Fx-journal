import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeadBannerComponent } from './admin-head-banner.component';

describe('AdminHeadBannerComponent', () => {
  let component: AdminHeadBannerComponent;
  let fixture: ComponentFixture<AdminHeadBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeadBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHeadBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

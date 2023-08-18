import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardBannerComponent } from './gift-card-banner.component';

describe('GiftCardBannerComponent', () => {
  let component: GiftCardBannerComponent;
  let fixture: ComponentFixture<GiftCardBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiftCardBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCardBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

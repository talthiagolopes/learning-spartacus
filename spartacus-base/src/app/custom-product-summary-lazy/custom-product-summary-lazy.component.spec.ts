import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductSummaryLazyComponent } from './custom-product-summary-lazy.component';

describe('CustomProductSummaryLazyComponent', () => {
  let component: CustomProductSummaryLazyComponent;
  let fixture: ComponentFixture<CustomProductSummaryLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductSummaryLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductSummaryLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

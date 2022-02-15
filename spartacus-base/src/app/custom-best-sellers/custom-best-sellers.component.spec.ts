import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBestSellersComponent } from './custom-best-sellers.component';

describe('CustomBestSellersComponent', () => {
  let component: CustomBestSellersComponent;
  let fixture: ComponentFixture<CustomBestSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomBestSellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

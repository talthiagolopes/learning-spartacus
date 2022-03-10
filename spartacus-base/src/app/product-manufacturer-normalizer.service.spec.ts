import { TestBed } from '@angular/core/testing';

import { ProductManufacturerNormalizerService } from './product-manufacturer-normalizer.service';

describe('ProductManufacturerNormalizerService', () => {
  let service: ProductManufacturerNormalizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductManufacturerNormalizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

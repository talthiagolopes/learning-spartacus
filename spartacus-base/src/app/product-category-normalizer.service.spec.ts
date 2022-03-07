import { TestBed } from '@angular/core/testing';

import { ProductCategoryNormalizerService } from './product-category-normalizer.service';

describe('ProductCategoryNormalizerService', () => {
  let service: ProductCategoryNormalizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategoryNormalizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

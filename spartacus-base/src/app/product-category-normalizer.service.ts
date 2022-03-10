import { Product, Converter, Occ } from '@spartacus/core';
import { Injectable } from '@angular/core';
import { prettify, CustomProduct } from './custom-routing/custom-routing.module';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryNormalizerService implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target?: CustomProduct): CustomProduct {

    if (source.categories && source.categories.length && target) {
      target.firstCategory = (source.categories.length == 1) ? prettify(source.categories[0].name) : '';
      target.firstCategory =  (source.categories.length == 2) ? prettify(source.categories[1].name) : '';
    }

    return target || {};
  }
}

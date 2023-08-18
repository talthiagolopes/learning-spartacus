import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';
import { prettify, CustomProduct } from './custom-routing/custom-routing.module';

@Injectable({
  providedIn: 'root'
})
export class ProductNameNormalizerService implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target?: CustomProduct): CustomProduct {

    if (source.name && target) {
      target.nameForUrl = prettify(source.name);

      if (target.nameForUrl.length > 10) {
        target.nameForUrl = target.nameForUrl.slice(0, 10);
      }
    }

    return target || {};
  }
}

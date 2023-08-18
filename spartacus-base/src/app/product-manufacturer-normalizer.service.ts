import { CustomProduct, prettify } from './custom-routing/custom-routing.module';
import { Converter, Product, Occ } from '@spartacus/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductManufacturerNormalizerService implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target?: Product): Product {
      if (source.manufacturer && target) {
        target.manufacturer = prettify(target.manufacturer)
      }

      return target || {};
  }
}

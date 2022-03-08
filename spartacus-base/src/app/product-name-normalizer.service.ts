import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class ProductNameNormalizerService implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target?: any): any { // Workaround - The correct aproach is: Create a new interface from Product that extends of Product

    if (source.name && target) {
      target.nameForUrl = source.name?.replace(/ /g, '-' );

      if (target.nameForUrl.length > 10) {
        target.nameForUrl = target.nameForUrl.slice(0, 10);
      }
    }

    return target || {};
  }
}

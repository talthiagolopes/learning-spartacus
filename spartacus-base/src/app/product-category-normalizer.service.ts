import { Product, Converter, Occ } from '@spartacus/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryNormalizerService implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target?: any): any { // Workaround - The correct aproach is: Create a new interface from Product that extends of Product

    if (source.categories && source.categories[0].name && target) {
      target.firstCategory = source.categories[0].name?.replace(/ /g, '-' ).toLowerCase();
    }

    return target;
  }
}

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductScope, ProductService, Product, CmsProductCarouselComponent } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { CmsComponentData } from '@spartacus/storefront';


@Component({
  selector: 'app-custom-product-carousel',
  templateUrl: './custom-product-carousel.component.html',
  styleUrls: ['./custom-product-carousel.component.scss']
})
export class CustomProductCarouselComponent implements OnInit {

  constructor(public componentData: CmsComponentData<CmsProductCarouselComponent>, private productService: ProductService) { }

  protected readonly PRODUCT_SCOPE = ProductScope.LIST;

  ngOnInit(): void {}

  items$: Observable<Observable<Product>[]> = this.componentData.data$.pipe(
    map((data) => data.productCodes?.trim().split(' ') ?? []),
    map((codes) =>
      codes.map((code) => this.productService.get(code, this.PRODUCT_SCOPE))
    )
  );

}

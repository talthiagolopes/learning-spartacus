import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCarouselComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-carousel',
  templateUrl: './custom-product-carousel.component.html',
  styleUrls: ['./custom-product-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomProductCarouselComponent extends ProductCarouselComponent {}

export class CustomProductCarouselModule {}

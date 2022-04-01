import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeferLoadingStrategy, I18nModule, provideConfig, UrlModule } from '@spartacus/core';
import { AddToCartModule, CarouselModule, MediaModule, StarRatingModule } from '@spartacus/storefront';
import { CustomProductCarouselComponent } from './custom-product-carousel.component';

@NgModule({
  declarations: [CustomProductCarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    MediaModule,
    RouterModule,
    UrlModule,
    AddToCartModule,
    I18nModule,
    StarRatingModule,
  ],
  providers: [
    provideConfig({
      cmsComponents: {
        ProductCarouselComponent: {
          component: CustomProductCarouselComponent,
        },
      },
    }),
    provideConfig({
      deferredLoading: {
        strategy: DeferLoadingStrategy.DEFER,
        intersectionMargin: '40px',
      },
    }),
    provideConfig({
      backend: {
        occ: {
          endpoints: {
            product: {
              list: 'products/${productCode}?fields=code,name,summary,manufacturer,categories(FULL),price(formattedValue),images(DEFAULT,galleryIndex),baseProduct,averageRating',
            },
          },
        },
      },
    }),
  ],
  exports: [CustomProductCarouselComponent],
})
export class CustomProductCarouselModule {}

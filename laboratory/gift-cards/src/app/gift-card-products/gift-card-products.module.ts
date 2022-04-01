import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { CustomProductCarouselComponent } from './../custom-product-carousel/custom-product-carousel.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideConfig({
      cmsComponents: {
        GiftCardProductsComponent: {
          component: CustomProductCarouselComponent,
        },
      },
    }),
  ],
})
export class GiftCardProductsModule {}

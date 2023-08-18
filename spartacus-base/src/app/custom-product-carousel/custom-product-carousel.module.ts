import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductCarouselComponent } from './custom-product-carousel.component';
import { provideConfig, UrlModule } from '@spartacus/core';



@NgModule({
  declarations: [
    CustomProductCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UrlModule
  ],
  providers: [
    provideConfig({
      cmsComponents: {
        ProductCarouselComponent: {
          component: CustomProductCarouselComponent,
        },
      },
    }),
  ]
})
export class CustomProductCarouselModule { }

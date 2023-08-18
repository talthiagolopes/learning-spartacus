import { RouterModule } from '@angular/router';
import { CustomCartDetailsComponent } from './custom-cart-details.component';
import { FeaturesConfigModule, provideConfig, UrlModule, I18nModule } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCouponModule, CartSharedModule, PromotionsModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    CustomCartDetailsComponent
  ],
  imports: [
    CommonModule,
    CartSharedModule,
    CartCouponModule,
    RouterModule,
    UrlModule,
    PromotionsModule,
    FeaturesConfigModule,
    I18nModule,
  ],
  providers: [
    provideConfig({
      cmsComponents: {
        CartComponent: {
          component: CustomCartDetailsComponent
        }
      }
    })
  ]
})
export class CustomCartDetailsModule { }

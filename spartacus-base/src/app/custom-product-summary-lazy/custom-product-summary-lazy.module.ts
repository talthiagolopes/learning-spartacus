import { provideConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig({
      cmsComponents: {
        ProductSummaryComponent : {
          component: () => import('./custom-product-summary-lazy.component').then(m => m.CustomProductSummaryLazyComponent)
        }
      }
    })
  ]
})
export class CustomProductSummaryLaztModule { }

import { provideConfig } from '@spartacus/core';
import { CustomProductSummaryComponent } from './custom-product-summary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CustomProductSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig({
      cmsComponents: {
        ProductSummaryComponent : {
          component: CustomProductSummaryComponent
        }
      }
    })
  ]
})
export class CustomProductSummaryModule { }

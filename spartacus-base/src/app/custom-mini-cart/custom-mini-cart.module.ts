import { I18nModule, provideConfig, UrlModule } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMiniCartComponent } from './custom-mini-cart.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    CustomMiniCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    IconModule,
    I18nModule,
  ],
  providers: [
    provideConfig({
        cmsComponents: {
          MiniCartComponent: {
            component: CustomMiniCartComponent
          }
        }
    })
  ]

})
export class CustomMiniCartModule { }

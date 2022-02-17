import { MyBannerComponent } from './my-banner.component';
import { provideConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    MyBannerComponent
  ],
  imports: [
    CommonModule,
    MediaModule
  ],
  providers: [
    provideConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: MyBannerComponent
        }
      }
    })
  ]
})
export class MyBannerModule { }

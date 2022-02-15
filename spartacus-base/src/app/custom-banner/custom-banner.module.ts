import { CustomBannerComponent } from './custom-banner.component';
import { provideConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideCmsStructure } from '@spartacus/storefront';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideCmsStructure({
      componentId: 'CustomBunner', //typeCode or flexType
      pageSlotPosition: 'CustomBannerSlot'
    }),
    provideConfig({
      cmsComponents: {
        CustomBunner: {
          component: CustomBannerComponent
        }
      }
    })
  ]
})
export class CustomBannerModule { }

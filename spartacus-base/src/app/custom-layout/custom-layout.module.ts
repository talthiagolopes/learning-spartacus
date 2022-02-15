import { provideConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutConfig } from '@spartacus/storefront';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig({
      layoutSlots: {
        LandingPage2Template: {
          lg: {
            slots: ['CustomBannerSlot', 'Section4', 'Section5']
          },
          md: {
            slots: []
          },
          xs: {
            slots: ['Section3']
          },
          slots: [
            'Selection1'
          ]
        }
      }
    } as LayoutConfig)
  ]
})
export class CustomLayoutModule { }

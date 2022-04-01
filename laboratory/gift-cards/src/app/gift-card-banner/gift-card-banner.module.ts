import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { LayoutConfig, MediaModule } from '@spartacus/storefront';
import { GiftCardBannerComponent } from './gift-card-banner.component';

@NgModule({
  declarations: [GiftCardBannerComponent],
  imports: [CommonModule, MediaModule],
  providers: [
    provideConfig({
      layoutSlots: {
        ContentPageGiftCardTemplate: {
          lg: {
            slots: ['SectionGiftCard', 'SectionGiftCardProducts'], //postition
          },
          md: {
            slots: ['SectionGiftCard', 'SectionGiftCardProducts'], //postition
          },
          xs: {
            slots: ['SectionGiftCardProducts'], //postition
          },
        },
      },
    } as LayoutConfig),
    provideConfig({
      cmsComponents: {
        GiftCardBannerComponent: {
          component: GiftCardBannerComponent,
        },
      },
    }),
  ],
})
export class GiftCardBannerModule {}

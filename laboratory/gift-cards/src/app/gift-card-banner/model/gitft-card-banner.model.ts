import { CmsBannerComponent } from '@spartacus/core';
import { MediaContainer } from '@spartacus/storefront';

export interface CmsGifCardBannerModel extends CmsBannerComponent {
  title: string;
  paragraph: string;
  link: string;
  image: MediaContainer;
}

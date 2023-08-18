import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { CmsGifCardBannerModel } from './model/gitft-card-banner.model';

@Component({
  selector: 'app-gift-card-banner',
  templateUrl: './gift-card-banner.component.html',
  styleUrls: ['./gift-card-banner.component.scss'],
})
export class GiftCardBannerComponent implements OnInit {
  componentData$: Observable<CmsGifCardBannerModel> = this.cmsComponentData.data$;

  constructor(protected cmsComponentData: CmsComponentData<CmsGifCardBannerModel>) {}

  ngOnInit(): void {}
}

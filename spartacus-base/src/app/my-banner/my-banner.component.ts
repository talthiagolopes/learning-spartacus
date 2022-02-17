import { Component, OnInit } from '@angular/core';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-my-banner',
  templateUrl: './my-banner.component.html',
  styleUrls: ['./my-banner.component.scss']
})
export class MyBannerComponent implements OnInit {

  constructor(public component: CmsComponentData<CmsBannerComponent>) { }

  ngOnInit(): void {
  }

}

import { UrlModule } from '@spartacus/core';
import { CmsPageGuard } from '@spartacus/storefront';
import { SpecialOfferComponent } from './special-offer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SpecialOfferComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'special-offers',
        component: SpecialOfferComponent,
        canActivate: [CmsPageGuard],
        data : { pageLabel: 'cart' }
      }
    ]),
    RouterModule,
    UrlModule
  ]
})
export class SpecialOfferModule { }

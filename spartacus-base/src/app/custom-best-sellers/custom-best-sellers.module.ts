import { CustomBestSellersComponent } from './custom-best-sellers.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsPageGuard } from '@spartacus/storefront';



@NgModule({
  declarations: [
    CustomBestSellersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'bestsellers',
        component: CustomBestSellersComponent,
        canActivate: [CmsPageGuard],
        data: {
          pageLabel: 'best'
        }
      }
    ])
  ]
})
export class CustomBestSellersModule { }

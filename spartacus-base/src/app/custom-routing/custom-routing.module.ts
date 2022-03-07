import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { StaticPageComponent } from './../static-page/static-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const STATIC_ROUTES: Routes = [
  {
    path: 'static-page',
    component: StaticPageComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: 'cart' },
  },
  {
    path: 'alias-frequently-asked-questions',
    component: PageLayoutComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: 'faq' }

  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES)
  ]
})
export class CustomRoutingModule { }

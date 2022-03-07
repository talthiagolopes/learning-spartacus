import { provideConfig, RoutingConfig } from '@spartacus/core';
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
    RouterModule.forChild(STATIC_ROUTES),
  ],
  providers: [
    provideConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'electronics/cameras/:firstCategory/:manufacturer/:productCode/:name/',
              'electronics/cameras/:manufacturer/:productCode/:name/',
              'electronics/cameras/:productCode/:nameForUrl/',
              'electronics/cameras/:productCode'
            ],
            paramsMapping: { name: 'nameForUrl'}
          }
        }
      }
    } as RoutingConfig),
    provideConfig({
      backend: {
        occ: {
          endpoints: {
            product: {
              list:
                'products/${productCode}?fields=code,name,summary,manufacturer,categories(FULL),price(formattedValue),images(DEFAULT,galleryIndex),baseProduct',
            }
          }
        }
      }
    })
  ]
})
export class CustomRoutingModule { }

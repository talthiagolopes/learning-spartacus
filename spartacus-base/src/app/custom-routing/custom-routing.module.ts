import { ProductManufacturerNormalizerService } from './../product-manufacturer-normalizer.service';
import { ProductCategoryNormalizerService } from './../product-category-normalizer.service';
import { ProductNameNormalizerService } from './../product-name-normalizer.service';
import { ContactComponent } from './../contact/contact.component';
import { provideConfig, RoutingConfig, Product, PRODUCT_NORMALIZER } from '@spartacus/core';
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
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [CmsPageGuard]
  }
]
export interface CustomProduct extends Product {
  nameForUrl?: string,
  firstCategory?: string,
  secondCategory?: string
}

export function prettify(value?: string): string {
  if (value) {
    return value.replace(/ /g, '-' ).toLowerCase()
  }
  return '';
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES),
  ],
  providers: [
    {
      provide: PRODUCT_NORMALIZER,
      useClass: ProductNameNormalizerService,
      multi: true
    },
    {
      provide: PRODUCT_NORMALIZER,
      useClass: ProductCategoryNormalizerService,
      multi: true
    },
    {
      provide: PRODUCT_NORMALIZER,
      useClass: ProductManufacturerNormalizerService,
      multi: true
    },
    provideConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'electronics/cameras/oldschool/:firstCategory/:secondCategory/:productCode/:name/:manufacturer',
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

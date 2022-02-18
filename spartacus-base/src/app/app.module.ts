import { AnonymousConsentManagementBannerComponent } from '@spartacus/storefront';
import { CustomProductSummaryLaztModule } from './custom-product-summary-lazy/custom-product-summary-lazy.module';
import { DeferLoadingStrategy, provideConfig } from '@spartacus/core';
import { MyBannerModule } from './my-banner/my-banner.module';
import { CustomCartModule } from './custom-cart/custom-cart.module';
import { CustomMiniCartModule } from './custom-mini-cart/custom-mini-cart.module';
import { CustomBannerModule } from './custom-banner/custom-banner.module';
import { CustomBestSellersModule } from './custom-best-sellers/custom-best-sellers.module';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { SalesDetailsModule } from './sales-details/sales-details.module';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomThemeModule } from "./custom-theme/custom-theme.module";
import { SpartacusModule } from './spartacus/spartacus.module';
import { CustomDebbugerModule } from "./custom-debbuger/custom-debbuger.module";
import { CustomProductSummaryLazyComponent } from './custom-product-summary-lazy/custom-product-summary-lazy.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomThemeModule,
    CustomDebbugerModule,
    SalesDetailsModule,
    //CustomLayoutModule,
    CustomBestSellersModule,
    CustomBannerModule,
    CustomMiniCartModule,
    CustomCartModule,
    MyBannerModule,
    CustomProductSummaryLaztModule
  ],
  providers: [
    provideConfig({
      featureModules: {
        customProductSummary: {
          module: () => import('./custom-product-summary/custom-product-summary.module').then(m => m.CustomProductSummaryModule),
          cmsComponents: ['ProductSummaryComponent']
        }
      }
    }),
    provideConfig({
      deferredLoading: {
        strategy: DeferLoadingStrategy.DEFER,
        intersectionMargin: '50px'
      }
    }),
    provideConfig({
      layoutSlots: {
        LandingPage2Template: {
          pageFold: 'Section2A',
          md: {
            pageFold: 'Section2B'
          },
          xs: {
            pageFold: 'Section3'
          }
        }
      }
    }),
    provideConfig({
      layoutSlots: {
        ProductDetailsPageTemplate: {
          pageFold: 'CrossSelling',
          lg: {
            pageFold: 'CrossSelling'
          }
        }
      }
    }),
    provideConfig({
      cmsComponents: {
        AnonymousConsentManagementBannerComponent: {
          component: AnonymousConsentManagementBannerComponent,
          deferLoading: DeferLoadingStrategy.DEFER
        }
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

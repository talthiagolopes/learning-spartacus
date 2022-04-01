import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideConfig } from '@spartacus/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiftCardBannerModule } from './gift-card-banner/gift-card-banner.module';
import { GiftCardProductsModule } from './gift-card-products/gift-card-products.module';
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    GiftCardBannerModule,
    GiftCardProductsModule,
  ],
  providers: [
    provideConfig({
      featureModules: {
        customProductCarousel: {
          module: () =>
            import('./custom-product-carousel/custom-product-carousel.module').then(m => m.CustomProductCarouselModule),
          cmsComponents: ['ProductCarouselComponent'],
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

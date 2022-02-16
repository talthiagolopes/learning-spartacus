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
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { CustomBestSellersComponent } from './custom-best-sellers/custom-best-sellers.component';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesDetailsComponent,
    CustomBestSellersComponent,
    CustomBannerComponent
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
    CustomLayoutModule,
    CustomBestSellersModule,
    CustomBannerModule,
    CustomMiniCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

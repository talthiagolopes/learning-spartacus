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
    CustomDebbugerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

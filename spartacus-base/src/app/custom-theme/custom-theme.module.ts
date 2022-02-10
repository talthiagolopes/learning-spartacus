import { DEFAULT_THEME_CONFIG } from './config/default-theme-config';
import { provideConfig } from '@spartacus/core';
;import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeConfig } from './config/theme-config';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig(DEFAULT_THEME_CONFIG)
  ]
})
export class CustomThemeModule { }

declare module '@spartacus/core' {
  interface Config extends ThemeConfig {}
}

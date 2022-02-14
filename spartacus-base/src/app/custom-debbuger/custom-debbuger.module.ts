import { CustomDebbugerComponent } from './custom-debbuger.component';
import { DEFAULT_DEBBUGER_CONFIG } from './config/default-debbuger-config';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebbugerConfig } from './config/debbuger-config';
import { provideConfig } from '@spartacus/core';



@NgModule({
  declarations: [
    CustomDebbugerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomDebbugerComponent
  ],
  providers: [
    provideConfig(DEFAULT_DEBBUGER_CONFIG)
  ]
})
export class CustomDebbugerModule { }

declare module '@spartacus/core' {
  interface Config extends DebbugerConfig {}
}

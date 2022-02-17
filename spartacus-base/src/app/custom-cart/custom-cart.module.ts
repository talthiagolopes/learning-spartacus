import { provideConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCartComponent } from './custom-cart.component';



@NgModule({
  declarations: [
    CustomCartComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig({
      cmsComponents: {
        CartComponent: {
          component: CustomCartComponent
        }
      }
    })
  ]
})
export class CustomCartModule { }

import { SalesDetailsComponent } from './sales-details.component';
import { provideConfig } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig({
      cmsComponents: {
        SalesDetailsComponent: {
          component: SalesDetailsComponent
        }
      }
    })
  ]
})
export class SalesDetailsModule { }

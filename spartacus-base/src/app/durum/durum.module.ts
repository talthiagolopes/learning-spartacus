import { provideConfig } from '@spartacus/core';
import { provideCmsStructure } from '@spartacus/storefront';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurumComponent } from '../durum/durum.component';



@NgModule({
  declarations: [
    DurumComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurumComponent
  ],
  providers: [
    provideCmsStructure({
      componentId: 'Durum', //typeCode or flexType
      pageSlotPosition: 'DurumSlot'
    }),
    provideConfig({
      cmsComponents: {
        Durum: {
          component: DurumComponent
        }
      }
    })
  ]
})
export class DurumModule { }

import { CustomUserOccModule } from './../core/src/occ/adapters/user-occ.module';
import { CustomUserModule } from './../core/src/user/user.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomAddressComponent } from './custom-address.component';



@NgModule({
  declarations: [
    CustomAddressComponent
  ],
  imports: [
    CommonModule,
    CustomUserModule
  ],
  exports: [CustomAddressComponent]
})
export class CustomAddressModule { }

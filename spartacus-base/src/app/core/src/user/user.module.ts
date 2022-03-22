import { CustomUserAddressConnector } from './connectors/addresses/user-address.connector';
import { CustomUserOccModule } from './../occ/adapters/user-occ.module';
import { CustomUserAddressService } from './facade/user-address.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomUserOccModule
  ],
  providers: [
    CustomUserAddressService,
    CustomUserAddressConnector
  ]
})
export class CustomUserModule { }

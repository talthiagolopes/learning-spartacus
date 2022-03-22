import { CUSTOM_ADDRESS_NORMALIZER } from '../../user/connectors/addresses/converters';
import { CustomOccUserAddressAdapter } from './user/occ-user-address.adapter';
import { occUserConfig } from './user/occ-user-config';
import { provideConfig, UserAddressAdapter } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomUserAddressNormalizer } from './user/user-address-normalizer';
import { CustomUserAddressAdapter } from '../../user/connectors/addresses/user-address.adapter';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig(occUserConfig),
    {
      provide: CustomUserAddressAdapter,
      useClass: CustomOccUserAddressAdapter
    },
    {
      provide: CUSTOM_ADDRESS_NORMALIZER,
      useClass: CustomUserAddressNormalizer,
      multi: true
    }
  ]
})
export class CustomUserOccModule { }

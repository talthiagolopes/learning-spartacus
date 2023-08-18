import { Injectable } from '@angular/core';

import { Address, Converter, Occ } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class CustomUserAddressNormalizer implements Converter<Occ.Address, Address> {

  convert(source: Occ.Address, target?: Address): Address {

    if (target === undefined) {
      target = { ...source };
    }

    if (source.formattedAddress) {
      target.formattedAddress = source.formattedAddress.toLocaleLowerCase();
    }
    return target;
  }

}

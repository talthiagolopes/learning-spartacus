import { Address, Converter } from '@spartacus/core';
import { InjectionToken } from "@angular/core";

export const CUSTOM_ADDRESS_NORMALIZER = new InjectionToken<Converter<any, Address >>(
  'AddressNormalizer'
)

import { OccConfig } from '@spartacus/core';

export const occUserConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        addresses: 'users/${userId}/addresses'
      }
    }
  }
}

import { Address } from '@spartacus/core';
import { Observable } from 'rxjs';

export abstract class CustomUserAddressAdapter {

  abstract loadAll(userId: string): Observable<Address[]>;
}

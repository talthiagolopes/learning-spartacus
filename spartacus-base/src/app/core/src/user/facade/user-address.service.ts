import { CustomUserAddressConnector } from './../connectors/addresses/user-address.connector';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Address, UserIdService } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class CustomUserAddressService {

  constructor(protected userIdService: UserIdService,
    private customUserAddressConnector: CustomUserAddressConnector) { }

  getAddresses(): Observable<Address[]> {
    return this.userIdService.takeUserId().pipe(
      switchMap(userId => this.customUserAddressConnector.getAll(userId))
    )
  }
}

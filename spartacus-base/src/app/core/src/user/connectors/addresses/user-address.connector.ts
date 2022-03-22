import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Address } from '@spartacus/core';
import { CustomUserAddressAdapter } from './user-address.adapter';

@Injectable({
  providedIn: 'root'
})
export class CustomUserAddressConnector {

  constructor(protected adapter: CustomUserAddressAdapter) {}

  getAll(userId: string): Observable<Address[]> {
    return this.adapter.loadAll(userId);
  }
}

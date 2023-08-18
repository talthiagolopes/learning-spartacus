import { CUSTOM_ADDRESS_NORMALIZER } from '../../../user/connectors/addresses/converters';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Address, ConverterService, Occ, OccEndpointsService } from "@spartacus/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { CustomUserAddressAdapter } from '../../../user/connectors/addresses/user-address.adapter';

@Injectable({
  providedIn: 'root'
})
export class CustomOccUserAddressAdapter implements CustomUserAddressAdapter {

  constructor(
    protected http: HttpClient,
    protected occEndpointsService: OccEndpointsService,
    protected converter: ConverterService
  ) {}

  loadAll(userId: string): Observable<Address[]> {

    const url = this.occEndpointsService.buildUrl('addresses', {
      urlParams: { userId }
    });

    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.get<Occ.AddressList>(url, { headers }).pipe(
      catchError((error: any) => throwError(error)),
      map((addressList) => addressList.addresses),
      this.converter.pipeableMany(CUSTOM_ADDRESS_NORMALIZER)
    )
  }

}

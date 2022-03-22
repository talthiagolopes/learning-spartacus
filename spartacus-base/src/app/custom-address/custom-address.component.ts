import { CustomUserAddressService } from './../core/src/user/facade/user-address.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-address',
  templateUrl: './custom-address.component.html',
  styleUrls: ['./custom-address.component.scss']
})
export class CustomAddressComponent implements OnInit {

  constructor(private userAddressService: CustomUserAddressService) { }

  ngOnInit(): void {
    this.userAddressService.getAddresses()
    .subscribe(addresses => console.log('address:', addresses))
  }

}

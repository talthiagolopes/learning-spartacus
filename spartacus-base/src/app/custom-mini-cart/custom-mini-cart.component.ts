import { Component, OnInit } from '@angular/core';
import { OrderEntry } from '@spartacus/core';
import { MiniCartComponent } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-mini-cart',
  templateUrl: './custom-mini-cart.component.html',
  styleUrls: ['./custom-mini-cart.component.scss']
})
export class CustomMiniCartComponent extends MiniCartComponent {
  entries$: Observable<OrderEntry[]> = this.activeCartService.getEntries()
}

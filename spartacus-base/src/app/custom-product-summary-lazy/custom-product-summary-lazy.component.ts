import { ProductSummaryComponent } from '@spartacus/storefront';
import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-custom-product-summary-lazy',
  templateUrl: './custom-product-summary-lazy.component.html',
  styleUrls: ['./custom-product-summary-lazy.component.scss']
})
export class CustomProductSummaryLazyComponent extends ProductSummaryComponent {}

//Workaround for lazy loading for the component
@NgModule({
  declarations: [
    CustomProductSummaryLazyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomProductSummaryLazyModule { }

import { Component, OnInit } from '@angular/core';
import { ProductSearchService, RoutingService } from '@spartacus/core';
import { filter, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.scss']
})
export class SpecialOfferComponent implements OnInit {

  constructor(private routingService: RoutingService,
    private productSearchService: ProductSearchService) { }

  ngOnInit(): void {
  }

  gotToRandomProduct() {
    this.productSearchService.search('came');

    this.productSearchService.getResults().pipe(
      filter(res => res.hasOwnProperty('products')),
      pluck('products')
    ).subscribe((products: any[] | undefined) => { // Workaround - The correct aproach is: Create a new interface from Product that extends of Product
      if (products) {
        const productLength = products.length;
        const random = Math.floor(Math.random() * productLength)

        const product = products[random];

        console.log(product);

        this.routingService.go({
          cxRoute: 'product',
          params: {
            code: product.code,
            nameForUrl: product.nameForUrl
          }
        });
      }
    });


  }

}

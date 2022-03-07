import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActiveCartService, OrderEntry } from '@spartacus/core';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss']
})
export class StaticPageComponent implements OnInit {

  entries$: Observable<OrderEntry[]> = this.activeCartService.getEntries();

  constructor(private activeCartService: ActiveCartService) { }

  ngOnInit(): void {
  }

}

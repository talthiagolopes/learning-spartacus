import { Component } from '@angular/core';
import { Config } from '@spartacus/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spartacus-base';

  constructor(private config: Config) {
    console.log("Config ", config);
  }
}

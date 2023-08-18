import { DebbugerType } from './config/debbuger-config';
import { Config } from '@spartacus/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-debbuger',
  templateUrl: './custom-debbuger.component.html',
  styleUrls: ['./custom-debbuger.component.scss']
})
export class CustomDebbugerComponent implements OnInit {

  isDebbugerTypeScreen: boolean = false;

  constructor(public config: Config) { }

  ngOnInit(): void {
    this.doDebbuger();
  }

  private doDebbuger() {
    if (this.config.debbugerType === DebbugerType.SCREEN) {
      this.isDebbugerTypeScreen = true;
    }
    else if (this.config.debbugerType === DebbugerType.CONSOLE) {
      console.log("Spartacus config: ", this.config);
    }
    else {
      this.isDebbugerTypeScreen = false;
    }
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date();
  timeZone = 0;
  lastTimeZoneSelected = null;

  localOffset(){
    return this.date.getTimezoneOffset() * 60000 * this.timeZone;
  }
  changeTime(tz) {
    this.date = new Date();
    if(tz=="PST"){
      this.timeZone = 0;
    }
    else if(tz=="MST") {
      this.timeZone = 1;
    }
    else if(tz=="CST") {
     this.timeZone = 2;
    }
    else if(tz=="EST") {
     this.timeZone = 3;
    };
    this.lastTimeZoneSelected = tz;
    this.date.setHours(this.date.getHours() + this.timeZone);
  }
}

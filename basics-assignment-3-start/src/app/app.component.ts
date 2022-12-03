import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayPass = false;
  clickLog = [];

  setDisplayPass(event: any)
  {
    this.displayPass = !this.displayPass;
    this.clickLog.push(event.timeStamp);
    return this.displayPass
  }
}

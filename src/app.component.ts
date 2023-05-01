import { Component } from '@angular/core';

import AOS from 'aos';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  ngAfterViewInit() {
    AOS.init();
  }
}

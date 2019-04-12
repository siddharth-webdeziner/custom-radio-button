import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newcomponent';
  radioClick = (event) => {
    console.log("print the event value : ", event);
  };
}

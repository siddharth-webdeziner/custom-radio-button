import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'lib-custom-radio-button',
  template: `
  <label class="radio-container">One
    <input type="radio" name="radio"  [(ngModel)]="checked">
    <span class="radio-checkmark"></span>
  </label>
  `,
  styleUrls: ['./custom-radio-button.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomRadioButtonComponent implements OnInit {
  @Input() checkedButton: string;
  checked: boolean = false;
  constructor() { }

  ngOnInit() {
    this.checked = this.checkedButton;
  }

}

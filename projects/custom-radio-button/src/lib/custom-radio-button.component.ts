import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-custom-radio-button',
  template: `
  <label class="radio-container" [ngClass]="{'disabledRadio': radioDisabled == true}">{{radioLabel}}
    <input type="radio" [name]="radioName" [disabled]="radioDisabled" [checked]="radioChecked">
    <span class="radio-checkmark" [ngStyle]="{'background-color': customBgColor,'border-color': customBorderColor }"></span>
  </label>
  `,
  styleUrls: ['./custom-radio-button.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomRadioButtonComponent implements OnInit {
  @Input() boxdisabled:boolean;
  @Input() boxchecked:boolean;
  @Input() boxname:string;
  @Input() boxlabel:string;
  @Input() customBgColor:string;
  @Input() customBorderColor:string;
  @Output() customClick = new EventEmitter();
  radioDisabled:boolean = false;
  radioChecked:boolean = false;
  radioName:string;
  radioLabel:string;
  checked:string;
  constructor() { }

  ngOnInit() {
    this.radioDisabled = this.boxdisabled;
    this.radioChecked = this.boxchecked;
    this.radioName = this.boxname;
    this.radioLabel = this.boxlabel;
    console.log('disabled : ',this.boxdisabled);
    console.log('checked : ',this.boxchecked);
    console.log('name : ',this.boxname);
  }

  // change() {
  //   this.customClick.emit(this.radioChecked);
  // }

}

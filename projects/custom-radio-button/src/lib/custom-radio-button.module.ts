import { NgModule } from '@angular/core';
import { CustomRadioButtonComponent } from './custom-radio-button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [CustomRadioButtonComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [CustomRadioButtonComponent]
})
export class CustomRadioButtonModule { }

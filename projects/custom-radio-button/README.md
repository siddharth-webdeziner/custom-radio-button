# Custom radio button component
Custom radio button is highly configrable and easy to use.

# Table of contents

* [Features](#features)
* [Getting started](#getting-started)
* [API](#api)
* [Basic example](#basic-example)

## Features

* [x] Custom radio button bindings to property or object
* [x] Custom theme changes
* [x] Custom label text
* [x] Custom Enable/Disable mode
* [x] No external dependencies (easy to use!),
* [x] Minimal styling (easy to customize!),
* [x] Great performance.

### Installation

```sh
$ npm i custom-radio-button
```

## Getting started

```js
import { CustomRadioButtonModule } from 'custom-radio-button';

@NgModule({
  imports: [
    CustomRadioButtonModule
  ]
})
```

## API

| Input            | Type            | Default                 | Required | Description                                                                                         |
| ---------------- | --------------- | ----------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| [customBgColor]        | string | `#eee`                    | no      | Will add background-color (#ddd) of the radio button.                                                 |
| [customSelectedBgColor]        | string          | `#fff` | no       | Will add inner-selected-color (#ff0000) of the radio button.                                                         |
| [boxType]    | string         | `circle`                 | no       | Can change the shape of the checkbox to `square`. Default `square`.                                                              |
| [customBorderColor]    | string          | `#333`           | no       | Will add border-color of the checkbox.            |
| [customSize] | string         | `medium`                 | no       | Will increase/decrease the size of the checkbox 3 more options `small`,`large`,`Xlarge`.   |
| [labelContent]            | string          | `Label`  | no       | Will change the label text. |
| [checkbox]            | boolean          | `false`                  | no       | If you want to checked the checkbox by defalut. Set it to`true`.  |
| [boxdisabled]            | boolean          | `false`                  | no       | If you want to disabled the checkbox by defalut. Set it to`true`. |
| [customClick]    | Function        | `false`                 | no       | Allow to create custom click function that is invoked onChange event of checkbox. |

### Basic example

```js
<dynamic-custom-checkbox 
[customBgColor]="'#ddd'" 
[customArrowColor]="'red'" 
[boxType]="'circle'" 
[customBorderColor]="'blue'"  
[customSize]="'Xlarge'"
[labelContent]="'siddharth'"
(customClick)="customClick($event)"
[checkbox]="true"
[boxdisabled]="true"></dynamic-custom-checkbox>

customClick = (event) => {
    console.log("print the event value : ", event);
};
```

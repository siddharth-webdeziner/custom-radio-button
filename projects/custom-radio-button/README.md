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
| [customBorderColor]    | string          | `transparent`           | no       | Will add border-color of the radio button.            |
| [customSize] | string         | `Xlarge`                 | no       | Will increase/decrease the size of the radio button 3 more options `small`,`large`,`medium`.   |
| [boxlabel]            | string          | `Label`  | no       | Will change the label text. |
| [boxchecked]            | boolean          | `false`                  | no       | If you want to checked the radio button by defalut. Set it to`true`.  |
| [boxdisabled]            | boolean          | `false`                  | no       | If you want to disabled the radio button by defalut. Set it to`true`. |
| [customInnerBorderColor]    | string  | `transparent`                 | no       | Will add inner-border-color of the radio button. |

### Basic example

```js
<custom-radio-button 
[boxType]="'square'"
[customInnerBorderColor]="'#fff'" 
[boxlabel]="'one'" 
[customBgColor]="'red'" 
[customSelectedBgColor]="'black'"
[boxchecked]="false" 
[boxdisabled]="false"
[customSize]="'medium'"
[customBorderColor]="'green'"></custom-radio-button>

```

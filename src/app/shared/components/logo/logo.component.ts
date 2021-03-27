import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <img
      ondragstart="return false"
      [src]="src"
      [alt]="alt"
      [width]="width"
      [height]="height"
    />
  `
})
export class LogoComponent {
  @Input() src: string = '../../../assets/Guinan.png';
  @Input() alt: string = 'GuinanPO logo';
  @Input() width: number = 250;
  @Input() height: number = 250;
}

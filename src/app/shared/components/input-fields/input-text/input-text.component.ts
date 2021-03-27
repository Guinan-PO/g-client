import { ValidateInputFieldService } from './../../../services/validateInputField/validate-input-field.service';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html'
})
export class InputTextComponent {
  @Input() placeHolder: string;
  @Input() control: AbstractControl;
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() label: string;
  @Input() isOutline: boolean;
  @Input() hint: string;

  constructor(public validateFieldService: ValidateInputFieldService) {}
}

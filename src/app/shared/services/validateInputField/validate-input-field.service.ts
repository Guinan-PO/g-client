import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateInputFieldService {
  constructor() { }

  public fieldHasError(control: AbstractControl, errorName: string): boolean {
    return ((control.dirty || control.touched) && control.hasError(errorName))
  }

  public fieldHasLengthError(control: AbstractControl, errorName: string): number {
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }
}

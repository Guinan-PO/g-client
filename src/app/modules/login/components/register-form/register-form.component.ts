import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/Models/User';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['../formsStyle.css', './register-form.component.css']
})
export class RegisterFormComponent {
  @Output() onFormSubmitted: EventEmitter<User> = new EventEmitter();
  @Output() onChangeToRegisterForm: EventEmitter<boolean> = new EventEmitter();

  public _registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  public submit(): void {
    this._registerForm.markAllAsTouched();
    if (this._registerForm.invalid) return;
    this.onFormSubmitted.emit(this._registerForm.value);
  }

  public setEditMode(state: boolean): void {
    this.onChangeToRegisterForm.emit(state);
  }
}

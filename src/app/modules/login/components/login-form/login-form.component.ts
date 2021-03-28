import { FormLogin } from './../../../../shared/Models/FormLogin';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../formsStyle.css']
})
export class LoginFormComponent implements OnInit {
  @Output() onFormSubmitted: EventEmitter<FormLogin> = new EventEmitter();
  @Output() onChangeToRegisterForm: EventEmitter<boolean> = new EventEmitter();
  @Input() userEmail: string;

  public _loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor() {}

  ngOnInit(): void {
    this._loginForm.controls.email.setValue(this.userEmail);
  }

  public submit() {
    this._loginForm.markAllAsTouched();
    if (this._loginForm.invalid) return;

    this.onFormSubmitted.emit(this._loginForm.value);
  }

  public setEditMode(state: boolean) {
    this.onChangeToRegisterForm.emit(state);
  }
}

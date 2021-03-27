import { FormLogin } from './../../../../shared/Models/FormLogin';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() onFormSubmitted: EventEmitter<FormLogin> = new EventEmitter();
  @Output() onChangeToRegisterForm: EventEmitter<boolean> = new EventEmitter();

  public _loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor() {}

  ngOnInit(): void {}

  public submit() {
    this._loginForm.markAllAsTouched();
    if (this._loginForm.invalid) return;

    this.onFormSubmitted.emit(this._loginForm.value);
  }

  public setEditMode(state: boolean) {
    console.log('aaaaaaaaaa');

    this.onChangeToRegisterForm.emit(state);
  }
}

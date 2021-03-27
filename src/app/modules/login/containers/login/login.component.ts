import { Component, OnInit } from '@angular/core';
import { FormLogin } from 'src/app/shared/Models/FormLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public editMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public setEditMode(state: boolean) {
    this.editMode = state;
  }

  public formLoginSubmitted(formObj: FormLogin) {}
}

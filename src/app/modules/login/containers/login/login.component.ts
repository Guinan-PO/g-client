import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormLogin } from 'src/app/shared/Models/FormLogin';
import { User } from 'src/app/shared/Models/User';
import { environment } from './../../../../../environments/environment';
import { UsersService } from './../../../../core/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public editMode: boolean = false;
  public _user$: Observable<User>;

  public userEmail: string;
  public isLoading = false;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

  public formLoginSubmitted(formObj: FormLogin) {}

  public formRegisterSubmitted(user: User) {
    this.isLoading = true;
    this._user$ = this.userService.createUser(user).pipe(
      tap((user) => {
        this.userEmail = user.email;
        this.isLoading = false;
        this.editMode = false;
      })
    );
  }

  public setEditMode(state: boolean) {
    this.editMode = state;
  }

  private setLocalStorage = (user: User): void => {
    console.log('setLocalStorage chamado');
    localStorage.setItem(environment.localStorage.user, JSON.stringify(user));
  };
}

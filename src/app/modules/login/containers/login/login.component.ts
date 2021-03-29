import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { FormLogin } from 'src/app/shared/Models/FormLogin';
import { User } from 'src/app/shared/Models/User';
import { AuthenticationService } from './../../../../core/services/authentication/authentication.service';
import { UsersService } from './../../../../core/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public editMode: boolean = false;
  public _user$: Observable<User>;
  public _loginForm$: Observable<any>;

  public userEmail: string;
  public isLoading = false;

  constructor(
    private userService: UsersService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public formLoginSubmitted({ email, password }: FormLogin) {
    this.isLoading = true;
    this._user$ = this.authService.login(email, password).pipe(
      tap(() => {
        this.isLoading = false;
        this.router.navigateByUrl('/');
      })
    );
  }

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
}

import { ResponseAuth } from './../../../shared/Models/Responses/ResponseAuth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/Models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSource$: BehaviorSubject<User>;
  public user$: Observable<User>;

  public get user(): User {
    return this.userSource$.value;
  }

  public set user(user: User) {
    this.userSource$.next(user);
  }

  constructor(private httpClient: HttpClient) {
    this.userSource$ = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(environment.localStorage.user))
    );
    this.user$ = this.userSource$.asObservable();
  }

  public login(username: string, password: string): Observable<User> {
    if (!username || !password) throw new Error('[login] no params');

    return this.httpClient
      .post<ResponseAuth>(`${environment.apiUrl}/tokens`, {
        username,
        password
      })
      .pipe(
        map((response) => {
          response.user.token = response.token;
          localStorage.setItem(
            environment.localStorage.user,
            JSON.stringify(response)
          );
          this.userSource$.next(response.user);
          return response.user;
        })
      );
  }

  public logout(): void {
    localStorage.removeItem(environment.localStorage.user);
    this.userSource$.next(null);
  }
}

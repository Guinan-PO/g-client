import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/Models/User';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userSource$ = new BehaviorSubject<User>(null);
  public user$ = new Observable<User>();

  public get user(): User {
    return this.userSource$.value;
  }

  public set user(user: User) {
    this.userSource$.next(user);
  }

  constructor(private httpClient: HttpClient) {
    this.user$ = this.userSource$.asObservable();
  }

  public createUser(user: User): Observable<User> {
    return this.httpClient
      .post<User>(`${environment.apiUrl}/users`, user)
      .pipe(tap((user) => this.userSource$.next(user)));
  }
}

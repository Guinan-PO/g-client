import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSource$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public isLoading$: Observable<boolean>;

  public get isLoading(): boolean {
    return this.isLoadingSource$.value;
  }

  public set isLoading(state: boolean) {
    this.isLoadingSource$.next(state);
  }

  constructor() {
    this.isLoading$ = this.isLoadingSource$.asObservable();
  }
}

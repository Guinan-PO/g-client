import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/Models/Category';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesSource$ = new BehaviorSubject<Category[]>([]);
  public categories$: Observable<Category[]> = new Observable();

  public get categories(): Category[] {
    return this.categoriesSource$.value;
  }

  public set categories(categories: Category[]) {
    this.categoriesSource$.next([
      ...this.categoriesSource$.value,
      ...categories
    ]);
  }

  constructor(private httpClient: HttpClient) {
    this.categories$ = this.categoriesSource$.asObservable();
  }

  public getCategories(
    page?: number,
    pageSize?: number
  ): Observable<Category[]> {
    const optionsHttp = this.setPaginatorParams(page, pageSize);

    return this.httpClient
      .get<Category[]>(`${environment.apiUrl}/categories`, optionsHttp)
      .pipe(tap((categories) => this.categoriesSource$.next(categories)));
  }

  private setPaginatorParams(page: number, pageSize: number): { params?: any } {
    let params = new HttpParams();
    if (page) params = params.append('page', page.toString());
    if (pageSize) params = params.append('pageSize', pageSize.toString());
    return { params };
  }
}

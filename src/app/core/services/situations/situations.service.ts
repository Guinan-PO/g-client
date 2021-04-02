import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Situation } from 'src/app/shared/Models/Situation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SituationsService {
  private actualPage: number = 0;

  constructor(private httpClient: HttpClient) {}

  public getSituations(
    category_id: number,
    page: number = this.actualPage,
    pageSize?: number
  ): Observable<Situation[]> {
    const optionsHttp = this.setPaginatorParams(page, pageSize, category_id);

    return this.httpClient.get<Situation[]>(
      `${environment.apiUrl}/situations`,
      optionsHttp
    );
  }

  private setPaginatorParams(
    page: number,
    pageSize: number,
    category_id: number
  ): { params?: any } {
    let params = new HttpParams();
    if (page) params = params.append('page', page.toString());
    if (pageSize) params = params.append('pageSize', pageSize.toString());
    params = params.append('category_id', category_id.toString());
    return { params };
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Situation } from 'src/app/shared/Models/Situation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SituationsService {
  constructor(private httpClient: HttpClient) {}

  public getSituations(
    category_id: number,
    page?: number,
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

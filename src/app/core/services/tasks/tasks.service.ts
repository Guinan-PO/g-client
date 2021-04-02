import { Task } from 'src/app/shared/Models/Task';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private actualPage: number = 0;

  public set page(page: number) {
    this.actualPage = page;
  }

  constructor(private httpClient: HttpClient) {}

  public getTasks(
    situation_id: number,
    page: number = this.actualPage,
    pageSize: number = 15
  ): Observable<Task[]> {
    const optionsHttp = this.setPaginatorParams(situation_id, page, pageSize);

    return this.httpClient.get<Task[]>(
      `${environment.apiUrl}/tasks`,
      optionsHttp
    );
  }

  private setPaginatorParams(
    situation_id: number,
    page: number,
    pageSize: number
  ): { params?: any } {
    let params = new HttpParams();
    if (page) params = params.append('page', page.toString());
    if (pageSize) params = params.append('pageSize', pageSize.toString());

    params = params.append('situation_id', situation_id.toString());
    return { params };
  }
}

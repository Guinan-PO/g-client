import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.authenticationService.user;

    if (user?.token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${user.token}` }
      });
    }

    return next.handle(request);
  }
}

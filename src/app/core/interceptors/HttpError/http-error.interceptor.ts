import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { catchError, tap } from 'rxjs/operators';
import { ModalErrorComponent } from 'src/app/shared/components/modal-error/modal-error.component';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private dialog: MatDialog
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          const errorMessage =
            err.status === 401
              ? 'Usuário não autenticado'
              : err.error.errors.toString();

          const dialogRef = this.dialog.open(ModalErrorComponent, {
            data: {
              title: 'Houve um erro durante a chamada ao Servidor',
              errorMessage
            }
          });

          dialogRef.afterClosed().subscribe((_) => {
            if (err.status === 401) this.authenticationService.logout();
            location.reload();

            return next.handle(request);
          });
        }

        console.error('An error occurred:', err.error.message);
        return next.handle(request);
      })
    );
  }
}

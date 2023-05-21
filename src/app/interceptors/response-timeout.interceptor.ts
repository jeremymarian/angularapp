import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ResponseTimeoutInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const timeoutValue = 10000; // Define el tiempo de tolerancia en milisegundos (en este ejemplo, 10 segundos)

    const modifiedRequest = request.clone({
      setHeaders: {
        timeout: `${timeoutValue}`,
      },
    });

    return next.handle(modifiedRequest);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    const key = '64dcad44084a68fbb653e37b390ada466457dc1e';

    request = request.clone({setHeaders:{Authorization:'Bearer '+ key}});

    return next.handle(request).pipe(catchError((error:HttpErrorResponse) => {
      console.log(error);
      return throwError(error);
    }));
  }
}

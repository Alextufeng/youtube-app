import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  private apiKey = 'AIzaSyCoctu4vbcpxYEe8JL_r83v2QVvPuUnvuY';

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  // eslint-disable-line
    return next.handle(
      request.clone({
        params: request.params.set('key', this.apiKey),
      }),
    );
  }
}

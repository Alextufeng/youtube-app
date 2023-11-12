import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StartInterceptor implements HttpInterceptor {
  private startsWithUrl = 'https://www.googleapis.com/youtube/v3/';

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiRequest = request.clone({ url: this.startsWithUrl + request.url });
    return next.handle(apiRequest);
  }
}

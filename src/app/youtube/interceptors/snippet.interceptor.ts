import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SnippetInterceptor implements HttpInterceptor {
  private param = 'part';

  private value = 'snippet';

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { // eslint-disable-line
    return next.handle(
      request.clone({
        params: request.params.set(this.param, this.value),
      }),
    );
  }
}

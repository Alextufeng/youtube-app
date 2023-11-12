import { Injectable, inject } from '@angular/core';
import { DataResponse } from '../models/search-response.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http = inject(HttpClient);

  getYoutubeItems(url: string): Observable<DataResponse> {
    return this.http.get<DataResponse>(url);
  }
}

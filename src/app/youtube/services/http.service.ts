import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataResponse } from '../models/search-response.model';
import { SearchResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);

  getYoutubeIds(url: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(url);
  }

  getYoutubeItems(url: string): Observable<DataResponse> {
    return this.http.get<DataResponse>(url);
  }
}

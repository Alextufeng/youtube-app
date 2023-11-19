import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataResponse } from '../models/search-response.model';
import { SearchResponse } from '../models/response.model';
import { itemsCount } from '../models/constants';

@Injectable({
  providedIn: 'root',
})
export class VideoApiService {
  private counter = itemsCount;

  private searchUrl = 'search?type=video';

  private detailedUrlStart = 'videos?id=';

  private detailedUrlEnd = '&part=statistics';

  private http = inject(HttpClient);

  getYoutubeIds(url: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`${this.searchUrl}&maxResults=${this.counter}&q=${url}`);
  }

  getYoutubeItems(array: string[]): Observable<DataResponse> {
    return this.http.get<DataResponse>(
      this.detailedUrlStart + array.join(',') + this.detailedUrlEnd,
    );
  }
}

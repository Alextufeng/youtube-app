import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, mergeMap } from 'rxjs';
import { DataItem } from 'src/app/youtube/models/search-item.model';
import { DataResponse } from 'src/app/youtube/models/search-response.model';
import { VideoApiService } from './video-api.service';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  private videoApiService = inject(VideoApiService);

  public onSearchClick$ = new BehaviorSubject(false);

  public resultsData$: BehaviorSubject<DataItem[]> = new BehaviorSubject<DataItem[]>([]);

  public filterString$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public searchData(searchString: string): void {
    if (this.onSearchClick$.value === false) {
      return;
    }
    if (searchString.length < 3) {
      this.resultsData$.next([]);
      return;
    }

    this.videoApiService
      .getYoutubeIds(searchString)
      .pipe(
        mergeMap((result) => {
          const idArray: string[] = [];
          result.items.forEach((item) => {
            idArray.push(item.id.videoId);
          });
          return this.videoApiService.getYoutubeItems(idArray);
        }),
      )
      .subscribe({
        next: (result) => {
          this.resultsData$.next(result.items);
        },
        error: (err) => console.log({ err }), // eslint-disable-line
      });
  }

  public clearSearchDataSubject(): void {
    this.resultsData$.next([]);
  }

  public getDataById(id: string): Observable<DataResponse> {
    return this.videoApiService.getYoutubeItems([id]);
  }

  sortResultByDate(): void {
    let list: DataItem[] = [];
    this.resultsData$.subscribe((value) => {
      list = value;
    });
    if (list.length > 1) {
      const lastIndex = list.length - 1;
      const firstItemDate = +new Date(list[0].snippet.publishedAt);
      const lastItemDate = +new Date(list[lastIndex].snippet.publishedAt);
      const order = firstItemDate > lastItemDate ? 1 : -1;
      list.sort(
        (a, b) =>
          order * +new Date(a.snippet.publishedAt) - order * +new Date(b.snippet.publishedAt),
      );
      this.resultsData$.next(list);
    }
  }

  sortResultByViews(): void {
    let list: DataItem[] = [];
    this.resultsData$.subscribe((value) => {
      list = value;
    });
    if (list.length > 1) {
      const lastIndex = list.length - 1;
      const firstItemViewCount = list[0].statistics.viewCount;
      const lastItemViewCount = list[lastIndex].statistics.viewCount;
      const order = firstItemViewCount > lastItemViewCount ? -1 : 1;
      list.sort((a, b) => order * +a.statistics.viewCount - order * +b.statistics.viewCount);
      this.resultsData$.next(list);
    }
  }

  changeSearchTag(input: string) {
    this.filterString$.next(input);
  }

  public clearSearchData(): void {
    this.resultsData$.next([]);
  }
}

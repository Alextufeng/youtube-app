import { Injectable } from '@angular/core';
import * as dataResponse from 'src/assets/mock-data.json';
import { BehaviorSubject } from 'rxjs';
import { DataResponse } from '../variables/search-response.model';
import { DataItem } from '../variables/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  public onSearchClick$ = new BehaviorSubject(false);

  private data: DataResponse = dataResponse;

  private dateIsChanged = 0;

  public filterString$ = new BehaviorSubject<string>('');

  public resultsData$: BehaviorSubject<DataItem[]> = new BehaviorSubject<DataItem[]>([]);

  public resultsData: DataItem[] = [];

  getData(): void {
    this.resultsData$.next(this.data.items);
  }

  getDataChanged(): number {
    return this.dateIsChanged;
  }

  searchData(searchString: string) {
    this.resultsData = this.data.items.filter((item) =>
      item.snippet.channelTitle.toLowerCase().startsWith(searchString.toLowerCase()),
    );
    this.dateIsChanged = Date.now();
  }

  public getDataById(id: string): DataItem {
    this.searchData('');
    const index = this.data.items.findIndex((item) => item.id === id);
    return this.data.items[index];
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
}

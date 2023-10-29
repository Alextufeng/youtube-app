import { Injectable } from '@angular/core';
import { DataResponse } from '../variables/search-response.model';
import * as dataResponse from 'src/assets/mock-data.json';
import { DataItem } from '../variables/search-item.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  public onSearchClick$ = new BehaviorSubject(false);

  private data: DataResponse = dataResponse;
  private resultsData: DataItem[] = this.data.items;
  private dateIsChanged = 0;
  private filterString = '';

  getData(): DataItem[] {
    return this.resultsData;
  }

  getDataChanged(): number {
    return this.dateIsChanged;
  }

  getFilterString(): string {
    return this.filterString;
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
    if (this.resultsData.length < 2) {
      return;
    }
    const lastIndex = this.resultsData.length - 1;
    const firstItemDate = +new Date(this.resultsData[0].snippet.publishedAt);
    const lastItemDate = +new Date(this.resultsData[lastIndex].snippet.publishedAt);
    const order = firstItemDate > lastItemDate ? 1 : -1;
    this.resultsData.sort(
      (a, b) => order * +new Date(a.snippet.publishedAt) - order * +new Date(b.snippet.publishedAt),
    );
    this.dateIsChanged = Date.now();
  }

  sortResultByViews(): void {
    if (this.resultsData.length > 1) {
      const lastIndex = this.resultsData.length - 1;
      const firstItemViewCount = this.resultsData[0].statistics.viewCount;
      const lastItemViewCount = this.resultsData[lastIndex].statistics.viewCount;
      const order = firstItemViewCount > lastItemViewCount ? -1 : 1;
      this.resultsData.sort(
        (a, b) => order * +a.statistics.viewCount - order * +b.statistics.viewCount,
      );
      this.dateIsChanged = Date.now();
    }
  }

  changeSearchTag(input: string) {
    this.filterString = input;
  }
}

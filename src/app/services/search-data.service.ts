import { Injectable } from '@angular/core';
import { DataResponse } from '../search/search-response.model';
import * as dataResponse from 'src/assets/mock-data.json';
import { DataItem } from '../search/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  private data: DataResponse = dataResponse;

  private resultData: DataItem[] = this.data.items;

  getData(): DataItem[] {
    console.log(this.data);
    //this.resultData = this.data
    return this.resultData;
  }
}

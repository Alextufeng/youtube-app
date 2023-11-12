import { DataItem } from './search-item.model';

export interface DataResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: DataItem[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

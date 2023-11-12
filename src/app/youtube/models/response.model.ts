import { Snippet } from './search-item.model';
import { PageInfo } from './search-response.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: DetailedItem[];
}

export interface DetailedItem {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface Id {
  kind: string;
  videoId: string;
}

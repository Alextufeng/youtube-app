import { Pipe, PipeTransform } from '@angular/core';
import { DataItem } from '../result/search-item.model';

@Pipe({
  name: 'resultFilter',
  standalone: true,
})
export class ResultFilterPipe implements PipeTransform {
  resultData: DataItem[] = [];

  transform(items: DataItem[], keyString: string): DataItem[] {
    if (keyString) {
      this.resultData = items.filter((item) => item.snippet.tags.includes(keyString));
      return this.resultData;
    }
    return items;
  }
}

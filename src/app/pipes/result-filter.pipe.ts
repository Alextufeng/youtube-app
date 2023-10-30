import { Pipe, PipeTransform } from '@angular/core';
import { DataItem } from '../variables/search-item.model';

@Pipe({
  name: 'resultFilter',
  standalone: true,
})
export class ResultFilterPipe implements PipeTransform {
  private resultsData: DataItem[] = [];

  public transform(list: DataItem[], filterString: string): DataItem[] {
    if (filterString) {
      this.resultsData = list.filter(
        (array) =>
          array.snippet.tags &&
          array.snippet.tags.find((item) =>
            item.toLowerCase().includes(filterString.toLowerCase()),
          ),
      );
      return (list = this.resultsData);
    }
    return list;
  }
}

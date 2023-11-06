import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataItem } from '../../models/search-item.model';
import { ResultItemComponent } from '../result-item/result-item.component';
import { ResultFilterPipe } from '../../pipes/result-filter.pipe';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [CommonModule, ResultItemComponent, ResultFilterPipe],
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent implements OnInit {
  public list: DataItem[] = [];

  public filterString: string;

  public onSearch$: BehaviorSubject<boolean>;

  private dataService = inject(SearchDataService);

  public resultList$ = this.dataService.resultsData$.pipe(takeUntilDestroyed());

  public filteredString$ = this.dataService.filterString$.pipe(takeUntilDestroyed());

  public ngOnInit(): void {
    this.dataService.getData();

    this.resultList$.subscribe({
      next: (res) => {
        this.list = res;
      },
      error: (err) => console.log({ err }), // eslint-disable-line
      complete: () => {
        this.list = [];
      },
    });

    this.onSearch$ = this.dataService.onSearchClick$;

    this.filteredString$.subscribe({
      next: (val) => {
        this.filterString = val;
      },
      error: (err) => console.log({ err }), // eslint-disable-line
      complete: () => {
        this.filterString = '';
      },
    });
  }
}

import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultItemComponent } from '../result-item/result-item.component';
import { DataItem } from '../search-item.model';
import { SearchDataService } from 'src/app/services/search-data.service';
import { ResultFilterPipe } from 'src/app/pipes/result-filter.pipe';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [CommonModule, ResultItemComponent, ResultFilterPipe],
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent implements OnInit, DoCheck {
  public list: DataItem[] = [];
  private dateIsChanged = 0;
  public keyString: string;
  public onSearch$: BehaviorSubject<boolean>;

  constructor(private dataService: SearchDataService) {}

  public ngOnInit(): void {
    this.onSearch$ = this.dataService.onSearchClick$;
    this.dateIsChanged = this.dataService.getDataChanged();
    this.list = this.dataService.getData();
  }

  public ngDoCheck(): void {
    if (this.keyString !== this.dataService.getFilterString()) {
      this.keyString = this.dataService.getFilterString();
    }
    if (this.dateIsChanged !== this.dataService.getDataChanged()) {
      this.dateIsChanged = this.dataService.getDataChanged();
      this.list = this.dataService.getData();
    }
  }
}

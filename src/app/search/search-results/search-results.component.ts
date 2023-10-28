import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from '../search-item/search-item.component';
import { DataItem } from '../search-item.model';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchItemComponent],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public list: DataItem[] = [];

  constructor(private dataService: SearchDataService) {}

  ngOnInit(): void {
    this.list = this.dataService.getData();
    console.log(this.list);
  }
}

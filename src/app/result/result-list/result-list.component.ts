import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultItemComponent } from '../result-item/result-item.component';
import { DataItem } from '../search-item.model';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [CommonModule, ResultItemComponent],
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent implements OnInit {
  public list: DataItem[] = [];

  constructor(private dataService: SearchDataService) {}

  ngOnInit(): void {
    this.list = this.dataService.getData();
    console.log(this.list);
  }
}

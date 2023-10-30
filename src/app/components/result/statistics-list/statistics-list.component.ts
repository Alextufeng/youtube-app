import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StatisticsItemComponent } from '../statistics-item/statistics-item.component';
import { Statistics } from '../../../variables/search-item.model';

@Component({
  selector: 'app-statistics-list',
  standalone: true,
  imports: [CommonModule, StatisticsItemComponent],
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss'],
})
export class StatisticsListComponent implements OnInit {
  @Input() statRow: Statistics;

  public statRowItem: [string, string][];

  public ngOnInit(): void {
    this.statRowItem = Object.entries(this.statRow);
  }
}

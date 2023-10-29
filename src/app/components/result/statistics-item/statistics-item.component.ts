import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STATISTICS } from 'src/app/variables/constants';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-statistics-item',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './statistics-item.component.html',
  styleUrls: ['./statistics-item.component.scss'],
})
export class StatisticsItemComponent implements OnInit {
  @Input() statItem: string;
  @Input() statCount: string;

  public icon: string;
  public number: string;

  public ngOnInit() {
    this.icon = STATISTICS[<keyof typeof STATISTICS>this.statItem];
    this.number = this.statCount;
  }
}

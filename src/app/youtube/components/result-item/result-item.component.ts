import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DataItem, Statistics } from '../../models/search-item.model';
import { BORDER_COLORS, BUTTONS } from '../../models/constants';
import { StatisticsListComponent } from '../statistics-list/statistics-list.component';
import { BorderColorDirective } from '../../directives/border-color.directive';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-result-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    BorderColorDirective,
    StatisticsListComponent,
    SharedModule,
  ],
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() set item(item: DataItem) {
    this.fullItem = item;
  }

  private fullItem!: DataItem;

  public itemId = '';

  public borderBottomColor = '';

  public publishedDaysCount = 0;

  public mediumThumbnailUrl = '';

  public channelTitle = '';

  public categoryId = '';

  public mediumImageUrl = '';

  public statistics: Statistics = {
    commentCount: '0',
    dislikeCount: '0',
    favoriteCount: '0',
    likeCount: '0',
    viewCount: '0',
  };

  public buttonText = BUTTONS.more;

  public ngOnInit(): void {
    this.setPublishedDaysBefore(this.fullItem.snippet.publishedAt);
    this.setBorderColor();
    this.setItemInfo();
  }

  private setItemInfo(): void {
    this.itemId = this.fullItem.id;
    this.statistics = this.fullItem.statistics;
    this.channelTitle = this.fullItem.snippet.channelTitle;
    this.categoryId = this.fullItem.snippet.categoryId;
    this.mediumThumbnailUrl = this.fullItem.snippet.thumbnails.medium.url;
  }

  private setPublishedDaysBefore(dateOfPublication: string) {
    const millisecondsPerSecond = 1000;
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hoursPerDay = 24;
    const milliseconds = Date.now() - new Date(dateOfPublication).getTime();
    const millisecondsIsDays =
      milliseconds / (millisecondsPerSecond * secondsPerMinute * minutesPerHour * hoursPerDay);
    this.publishedDaysCount = millisecondsIsDays;
  }

  private setBorderColor(): void {
    switch (true) {
      case this.publishedDaysCount > 180:
        this.borderBottomColor = BORDER_COLORS.red;
        break;
      case this.publishedDaysCount < 7:
        this.borderBottomColor = BORDER_COLORS.blue;
        break;
      case this.publishedDaysCount < 30:
        this.borderBottomColor = BORDER_COLORS.green;
        break;
      default:
        this.borderBottomColor = BORDER_COLORS.yellow;
    }
  }
}

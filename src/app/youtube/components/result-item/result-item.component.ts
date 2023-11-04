import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DataItem, Statistics } from '../../models/search-item.model';
import { BUTTONS } from '../../models/constants';
import { StatisticsListComponent } from '../statistics-list/statistics-list.component';
import { BorderColorDirective } from '../../directives/border-color.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SetColorDatePipe } from '../../pipes/set-border-color.pipe';

@Component({
  selector: 'app-result-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    BorderColorDirective,
    StatisticsListComponent,
    SharedModule,
    RouterModule,
    SetColorDatePipe
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

  public publishedDaysCount = 0;

  public mediumThumbnailUrl = '';

  public channelTitle = '';

  public categoryId = '';

  public mediumImageUrl = '';

  public publishedDaysBefore = '';

  public statistics: Statistics = {
    commentCount: '0',
    dislikeCount: '0',
    likeCount: '0',
    viewCount: '0',
  };

  public buttonText = BUTTONS.more;

  public ngOnInit(): void {
    this.setItemInfo();
  }

  private setItemInfo(): void {
    this.itemId = this.fullItem.id;
    this.statistics = this.fullItem.statistics;
    this.channelTitle = this.fullItem.snippet.channelTitle;
    this.categoryId = this.fullItem.snippet.categoryId;
    this.mediumThumbnailUrl = this.fullItem.snippet.thumbnails.medium.url;
    this.publishedDaysBefore = this.fullItem.snippet.publishedAt;
  }
}

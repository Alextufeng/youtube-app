import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Statistics } from '../../models/search-item.model';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { StatisticsListComponent } from '../../components/statistics-list/statistics-list.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { MatIconModule } from '@angular/material/icon';
import { BorderColorDirective } from '../../directives/border-color.directive';
import { SetColorDatePipe } from '../../pipes/set-border-color.pipe';

@Component({
  selector: 'app-detailed-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent, StatisticsListComponent, BorderColorDirective, MatIconModule, RouterModule, SetColorDatePipe],
  templateUrl: './detailed-item.component.html',
  styleUrls: ['./detailed-item.component.scss']
})
export class DetailedItemComponent {
  public publishedAt = '';
  public imageUrl = '';
  public channelTitle = '';
  public description = '';
  public mediumThumbnailUrl = '';
  public categoryId = '';
  public publishedDaysBefore = 0;

  public statistics: Statistics = {
    commentCount: '0',
    dislikeCount: '0',
    likeCount: '0',
    viewCount: '0',
  };

  private router = inject(Router)
  private activeRoute = inject(ActivatedRoute)
  private searchDataService = inject(SearchDataService)

  public ngOnInit() {
    this.setDetails();
  }

  private setDetails() {
    const {id} = this.activeRoute.snapshot.params;
    const item = this.searchDataService.getDataById(id);

      if (!item) {
        this.router.navigate(['not-found']);
      } else {
        this.publishedAt = item.snippet.publishedAt;
        this.imageUrl = item.snippet.thumbnails.high.url;
        this.channelTitle = item.snippet.channelTitle;
        this.description = item.snippet.description;
        this.statistics = item.statistics;
        this.categoryId = item.snippet.categoryId;
      }
  }
}

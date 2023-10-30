import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-header-search-settings',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header-search-settings.component.html',
  styleUrls: ['./header-search-settings.component.scss'],
})
export class HeaderSearchSettingsComponent implements OnInit {
  public value = '';

  private dataService = inject(SearchDataService);

  public ngOnInit() {
    this.value = '';
    this.dataService.changeSearchTag('');
  }

  public sortByDates(): void {
    this.dataService.sortResultByDate();
  }

  public sortByViews(): void {
    this.dataService.sortResultByViews();
  }

  public tagsFilter(event: Event): void {
    const tag = (event.target as HTMLInputElement).value;
    this.dataService.changeSearchTag(tag);
  }
}

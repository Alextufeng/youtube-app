import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Component({
  selector: 'app-header-search',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent {
  public searchString$ = new BehaviorSubject('');

  public searchInputValue = '';

  public placeholder = 'What are you want to find out?';

  private dataService = inject(SearchDataService);

  public makeSearch(): void {
    this.dataService.onSearchClick$.next(true);
  }

  public inputChange(event: Event): void {
    const searchString = (event.target as HTMLInputElement).value;
    this.searchString$.next(searchString);
  }
}

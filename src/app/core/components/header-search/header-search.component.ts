import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header-search',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent implements OnInit {
  public searchString$ = new BehaviorSubject('');

  public searchInputValue = '';

  public placeholder = 'What are you want to find out?';

  public isSearchInputDisabled = false;

  private dataService = inject(SearchDataService);
  private authService = inject(AuthService);

  public searchResultList$ = this.searchString$.pipe(takeUntilDestroyed());
  public isUserAuth$ = this.authService.isUserLogged$.pipe(takeUntilDestroyed());

  ngOnInit(): void {
    this.searchResultList$
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        this.dataService.searchData(value);
      });
    this.isUserAuth$.subscribe(
      (value) => {
        if (!value) {
          this.searchInputValue = '';
          this.isSearchInputDisabled = true;
        } else {
          this.isSearchInputDisabled = false;
        }
      }
    );
  }

  public makeSearch(): void {
    this.dataService.searchData(this.searchInputValue);
  }

  public inputChange(event: Event): void {
    const searchString = (event.target as HTMLInputElement).value;
    this.searchString$.next(searchString);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results/search-results.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, SearchResultsComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {}

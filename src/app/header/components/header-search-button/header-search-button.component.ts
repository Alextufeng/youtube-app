import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { searchButtonIcon } from 'src/assets/icons/search-btn';

@Component({
  selector: 'app-header-search-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-search-button.component.html',
  styleUrls: ['./header-search-button.component.scss']
})
export class HeaderSearchButtonComponent {
  public searchButton = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(searchButtonIcon);

}

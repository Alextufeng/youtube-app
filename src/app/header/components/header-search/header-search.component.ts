import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSearchInputComponent } from '../header-search-input/header-search-input.component';
import { HeaderSearchButtonComponent } from '../header-search-button/header-search-button.component';

@Component({
  selector: 'app-header-search',
  standalone: true,
  imports: [CommonModule, HeaderSearchInputComponent, HeaderSearchButtonComponent],
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent {

}

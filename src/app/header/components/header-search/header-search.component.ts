import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-search',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent {
  public placeholder = 'What are you want to find out?';
}

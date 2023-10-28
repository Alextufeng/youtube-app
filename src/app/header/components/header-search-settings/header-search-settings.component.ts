import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-search-settings',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header-search-settings.component.html',
  styleUrls: ['./header-search-settings.component.scss'],
})
export class HeaderSearchSettingsComponent {}

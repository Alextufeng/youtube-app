import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { settingsIcon } from 'src/assets/icons/settings';

@Component({
  selector: 'app-header-search-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-search-settings.component.html',
  styleUrls: ['./header-search-settings.component.scss']
})
export class HeaderSearchSettingsComponent {
  public settings = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(settingsIcon);
}

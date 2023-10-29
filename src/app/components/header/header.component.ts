import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderSearchSettingsComponent } from './components/header-search-settings/header-search-settings.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderSearchSettingsComponent, HeaderSearchComponent, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isSettingsShown = false;

  public settingsShown() {
    this.isSettingsShown = !this.isSettingsShown;
  }
}

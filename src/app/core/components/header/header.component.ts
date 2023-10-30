import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderSearchComponent } from '../header-search/header-search.component';
import { HeaderSearchSettingsComponent } from '../header-search-settings/header-search-settings.component';
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

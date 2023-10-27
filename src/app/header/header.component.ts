import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogoIconComponent } from './components/header-logo-icon/header-logo-icon.component';
import { HeaderSearchSettingsComponent } from './components/header-search-settings/header-search-settings.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderLogoIconComponent, HeaderSearchSettingsComponent, HeaderSearchComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}

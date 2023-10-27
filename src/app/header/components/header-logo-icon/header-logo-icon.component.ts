import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { logoIcon } from 'src/assets/icons/logo';

@Component({
  selector: 'app-header-logo-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-logo-icon.component.html',
  styleUrls: ['./header-logo-icon.component.scss']
})
export class HeaderLogoIconComponent {
  public logo = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(logoIcon);
}

import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { arrowBack } from 'src/assets/icons/arrow-back';
import { authIcon } from 'src/assets/icons/auth';
import { logoIcon } from 'src/assets/icons/logo';
import { notFoundIcon } from 'src/assets/icons/not-found';
import { searchButtonIcon } from 'src/assets/icons/search-btn';
import { settingsIcon } from 'src/assets/icons/settings';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private iconRegistry = inject(MatIconRegistry);

  private sanitizer = inject(DomSanitizer);

  add(iconName: string, source: string): void {
    this.iconRegistry.addSvgIconLiteral(iconName, this.sanitizer.bypassSecurityTrustHtml(source));
  }

  addPath(iconName: string, path: string): void {
    this.iconRegistry.addSvgIcon(iconName, this.sanitizer.bypassSecurityTrustResourceUrl(path));
  }

  public initSvgIcons(): void {
    this.add('logoIcon', logoIcon);
    this.add('searchButtonIcon', searchButtonIcon);
    this.add('settingsIcon', settingsIcon);
    this.add('authIcon', authIcon);
    this.add('notFoundIcon', notFoundIcon);
    this.add('arrowBack', arrowBack);
  }
}

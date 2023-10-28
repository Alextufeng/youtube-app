import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {}

  add(iconName: string, source: string): void {
    void this.iconRegistry.addSvgIconLiteral(
      iconName,
      this.sanitizer.bypassSecurityTrustHtml(source),
    );
  }

  addPath(iconName: string, path: string): void {
    void this.iconRegistry.addSvgIcon(
      iconName,
      this.sanitizer.bypassSecurityTrustResourceUrl(path),
    );
  }
}

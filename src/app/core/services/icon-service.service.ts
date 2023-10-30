import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
}

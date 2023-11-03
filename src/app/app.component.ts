import { Component, OnInit, inject } from '@angular/core';
import { IconService } from './core/services/icon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'youtube-client';

  private iconService = inject(IconService);

  public ngOnInit(): void {
    this.iconService.initSvgIcons();
  }
}

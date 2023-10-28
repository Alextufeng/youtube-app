import { Component, OnInit } from '@angular/core';
import { IconService } from './services/icon-service.service';
import { searchButtonIcon } from 'src/assets/icons/search-btn';
import { logoIcon } from 'src/assets/icons/logo';
import { settingsIcon } from 'src/assets/icons/settings';
import { authIcon } from 'src/assets/icons/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'youtube-client';

  constructor(private iconService: IconService) {}

  public ngOnInit(): void {
    this.InitSvgIcons();
  }

  private InitSvgIcons(): void {
    this.iconService.add('logoIcon', logoIcon);
    this.iconService.add('searchButtonIcon', searchButtonIcon);
    this.iconService.add('settingsIcon', settingsIcon);
    this.iconService.add('authIcon', authIcon);
  }
}

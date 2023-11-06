import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { BUTTONS } from 'src/app/youtube/models/constants';
import { HeaderSearchSettingsComponent } from '../header-search-settings/header-search-settings.component';
import { HeaderSearchComponent } from '../header-search/header-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    HeaderSearchSettingsComponent,
    HeaderSearchComponent,
    MatIconModule,
    ButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isSettingsShown = false;

  public logIn = BUTTONS.login;

  public logOut = BUTTONS.logout;

  private authService = inject(AuthService);

  public isUserLogged$ = this.authService.isUserLogged$;

  public userName$ = this.authService.userName$;

  public settingsShown() {
    this.isSettingsShown = !this.isSettingsShown;
  }

  public logInApp() {
    this.authService.login();
  }

  public logOutApp() {
    this.authService.logout();
  }
}

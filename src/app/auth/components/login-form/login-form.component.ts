import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUTTONS } from 'src/app/youtube/models/constants';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public buttonText = BUTTONS.login;

  private formAuthService = inject(AuthService);

  public login(): void {
    this.formAuthService.login();
  }
}

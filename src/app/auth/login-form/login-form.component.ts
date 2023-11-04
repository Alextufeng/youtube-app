import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { BUTTONS } from 'src/app/youtube/models/constants';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public buttonText = BUTTONS.login;
  private formSubmit = inject(AuthService);

  public login(): void {
    this.formSubmit.login();
  }
}

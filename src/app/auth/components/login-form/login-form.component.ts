import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUTTONS } from 'src/app/youtube/models/constants';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { emailValidator } from '../../validators/email.validator';
import { passwordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public authForm: FormGroup;

  public buttonText = BUTTONS.login;

  private formAuthService = inject(AuthService);

  public ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, emailValidator()]),
      password: new FormControl('', [Validators.required, passwordValidator()]),
    });
  }

  public login(): void {
    if (this.authForm.valid) {
      this.formAuthService.login();
    }
  }
}

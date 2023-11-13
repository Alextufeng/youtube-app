import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUTTONS } from 'src/app/youtube/models/constants';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../validators/email.validator';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit{
  public authForm: FormGroup;
  public buttonText = BUTTONS.login;

  private formAuthService = inject(AuthService);

  public ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, emailValidator()]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  public login(): void {
    if (this.authForm.valid) {
      this.formAuthService.login();
    }
  }
}

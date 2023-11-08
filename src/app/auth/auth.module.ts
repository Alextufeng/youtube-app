import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.mpdule';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, LoginFormComponent],
})
export class AuthModule {}

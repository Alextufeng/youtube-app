import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthRoutingModule } from './auth-routing.mpdule';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, AuthRoutingModule, LoginFormComponent
  ]
})
export class AuthModule { }

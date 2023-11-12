import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    const isAuth = localStorage.getItem('login');
    if (isAuth === 'test') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}

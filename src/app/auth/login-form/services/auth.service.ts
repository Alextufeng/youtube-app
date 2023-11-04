import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLogged = false;

  public login() {
    localStorage.setItem('login', '1111111111');
    this.router.navigate(['/']);
    return (this.isLogged = true);
  }

  public logout() {
    localStorage.removeItem('login');
    this.router.navigate(['login']);
    return (this.isLogged = false);
  }
}

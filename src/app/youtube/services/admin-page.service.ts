import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminPageService {
  private router = inject(Router);

  public adminPage(): void {
    this.router.navigate(['admin']);
  }

  public mainPage(): void {
    this.router.navigate(['']);
  }
}

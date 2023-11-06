import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isUserLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public userName$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private searchDataService = inject(SearchDataService);

  constructor(private router: Router) {
    if (localStorage.getItem('login')) {
      this.isUserLogged$.next(true);
    }
  }

  public login(): void {
    this.isUserLogged$.next(true);
    localStorage.setItem('login', 'test');
    this.router.navigate(['']);
    this.userName$.next('Done Joe');
  }

  public logout(): void {
    this.isUserLogged$.next(false);
    localStorage.removeItem('login');
    this.router.navigate(['login']);
    this.searchDataService.clearSearchData();
  }
}

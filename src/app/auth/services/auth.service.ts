import { Injectable, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  public isUserLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>( false);
  public userName$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private router = inject(Router);
  private searchDataService =  inject(SearchDataService);

  public ngOnInit ( ) {
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

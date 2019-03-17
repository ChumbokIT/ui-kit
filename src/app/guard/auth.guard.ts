import {Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate, OnInit {

  private enableMock: boolean = environment.chumbok.enableMock;

  constructor(private loginService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    | boolean | UrlTree {

    if (this.enableMock) {
      return true;
    }

    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;

  }

}

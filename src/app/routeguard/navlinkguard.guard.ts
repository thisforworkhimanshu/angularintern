import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable()
export class Navlinkguard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
        if (route.params.navlink === 'active' ||
        route.params.navlink === 'queue' ||
        route.params.navlink === 'team' ||
        route.params.navlink === 'history' ||
        route.params.navlink === 'bot' ||
        route.params.navlink === 'profile') {
            return true;
        } else {
          this.router.navigate(['/error', { errorcode: 404 }]);
          return false;
        }
      }
}

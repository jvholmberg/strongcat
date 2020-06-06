import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router : Router,
    private authService: AuthService,
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      // User is logged in; Navigate to route
      if (this.authService.isAuthenticated()) {
        return true;
      }

      // User not logged in
      this.router.navigate(['unauthorized']);
      return false;
    }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
}from '@angular/router';
import { AuthService } from './auth.sevice';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            const isLoggedIn = this.authService.isLoggedIn();
            console.log('canActivate', isLoggedIn);
            return isLoggedIn;
        }
}
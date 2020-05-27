import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    const isLoggedIn = window.localStorage.getItem('authorized');
    return !!isLoggedIn;
  }


  public login(username: string, password: string): void {
    window.localStorage.setItem('authorized', `${username};${password}`);
  }

  public logout(): void {
    
  }
}

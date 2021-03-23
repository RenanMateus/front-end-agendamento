import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private router: Router) { }


  verificarAcesso() {
    const usuario: any = JSON.parse(sessionStorage.getItem('usuario'));

    if (usuario?.token) {
      return true;

    } else {
      return false;
    }
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const usuario: any = JSON.parse(sessionStorage.getItem('usuario'));
    if (state.url == '/login') {
      if (usuario?.token) {
        this.router.navigate(['/inicio']);
        return;
      } else {
        return true;
      }
    } else {
      return this.verificarAcesso();
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso();
  }
}

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ControlAccess {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    const isAuthenticated = localStorage.getItem('id') !== null;

    if (isAuthenticated) {
      return true; // Permite el acceso a la ruta
    } else {
      this.router.navigateByUrl('/login');
      window.alert('debe estar logeado'); // Redirige a la página de inicio de sesión si no está autenticado
      return false; // No permite el acceso a la ruta
    }
  }
}

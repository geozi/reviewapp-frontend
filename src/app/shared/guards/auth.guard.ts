import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Custom route guard to check user authentication.
 * @param {ActivatedRouteSnapshot} route - The current route snapshot.
 * @param {RouterStateSnapshot} state - The current router state snapshot.
 * @returns {boolean} - Returns true if the user is authenticated, otherwise navigates to the login form.
 * @author geozi
 * @version 1
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.user()) {
    return true;
  }

  return router.navigate(['login-form']);
};

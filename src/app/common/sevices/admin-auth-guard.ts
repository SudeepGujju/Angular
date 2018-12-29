import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user = this.authService.currentUser;
    if (user && user.admin) return true;

    this.router.navigateByUrl("/noaccess");
    return false;
  }
}

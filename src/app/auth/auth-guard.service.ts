
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";



@Injectable()
export class AuthGuard implements CanActivate{

    constructor(public authService: AuthService){}

    canActivate(){
        return this.authService.isAuthenticated();
    }
}
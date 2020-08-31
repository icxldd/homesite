import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { NavRouterService } from './NavRouter.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

constructor(private tokenservice: TokenService, private navRouteSrv: NavRouterService) { }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
  /*
  *注意:ActivatedRouteSnapshot需要引入,不然state.url没有参数,比如登录后需要跳转app/model/products,
  *没有引入ActivatedRouteSnapshot的话,只有app
  */
  let logined = this.tokenservice.getIsLogin() ? true : false;
  if (!logined) {
    let params = {
      queryParams: {
        return: state.url
      }
    };
    
    this.navRouteSrv.goto('/basic/login', params);
    return false;
  }else{
    // if(state.url.indexOf('login')!=-1){
    //   this.navRouteSrv.goto('/basic/home');
    //   return false;
    // }
  }
  return true;
}//can
}

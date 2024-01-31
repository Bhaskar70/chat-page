import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { ChatService } from '../chat-service/chat.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private chatservice: ChatService,
    private cookieservice :CookieService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    //forget about: how to get the authority of user (I have kept it in shared service)
    const token = this.cookieservice.get('jwt')
    console.log(token)
    if (token) {
      console.log(route.routeConfig?.path , "url")
      if (route.routeConfig && (route.routeConfig.path === 'login' || route.routeConfig.path === '')) {
        this.router.navigate(['/chat-page']);
      }
      return this.chatservice.getUser().pipe(
        map((res: any) => {
          return true;
        }),
      );
    } else {
      if (route.routeConfig && route.routeConfig.path === 'login') {
        return of(true);
      } else {
        this.router.navigate(['/']);
      }
    }
  }
}

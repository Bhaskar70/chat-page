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
    return of(true)
  }
}

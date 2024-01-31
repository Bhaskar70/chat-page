import { Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ChatPageComponent } from './component/chat-page/chat-page.component';
import { AuthService } from './services/auth-service/auth.service';

export const routes: Routes = [
    {path:'' , component:LandingPageComponent, canActivate :[AuthService]},
    {path:'login' , component:LoginComponent , canActivate:[AuthService]},
    {path:'register' , component:RegisterComponent, canActivate :[AuthService]},
    {path:'chat-page' , component:ChatPageComponent, canActivate :[AuthService]}
];

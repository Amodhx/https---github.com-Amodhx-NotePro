import { Routes } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { ViewCardComponent } from './component/view-card/view-card.component';

export const routes: Routes = [

    {
        path:"",
        component:LoginPageComponent
    },
    {
        path:"home",
        component:MainPageComponent
    },
    {
        path:"view-card",
        component:ViewCardComponent
    },
    {
        path : "login",
        component : LoginPageComponent
    }
];

import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';
import { SidebarComponent } from './Sidebar/sidebar/sidebar.component';
import { ForgetPasswordComponent } from './Login/forget-password/forget-password.component';



const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent},
    {path: 'forgetpassword', component: ForgetPasswordComponent},
    {path: 'signup', component: RegisterComponent},
    {path: 'sidebar', component: SidebarComponent}
  ];

@NgModule({
  
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule],
  
  declarations: []
})
export class AppRoutingModule { }
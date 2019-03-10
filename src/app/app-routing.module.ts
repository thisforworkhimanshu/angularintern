import { ErrorComponent } from './error/error.component';
import { Navlinkguard } from './routeguard/navlinkguard.guard';
import { ChatWindowComponent } from './main-content/chat-window/chat-window.component';
import { WelcometextComponent } from './welcometext/welcometext.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'home', component: SideNavigationComponent, children:
    [
      {path: '', component: WelcometextComponent},
      {path: 'profile' , component: ProfileComponent},
      {path: ':navlink', component: MainContentComponent, canActivate: [Navlinkguard] , children:
        [
          {path: ':username/:userid', component: ChatWindowComponent, pathMatch: 'full'}
        ]
      },
    ]
  },
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

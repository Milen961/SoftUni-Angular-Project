import { RouterModule, Routes } from "@angular/router";
import { AuthGuards } from "../shared/userGuards/auth.guards";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuards],
    data: {
      title: 'Login',
      loginRequired: false
    }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuards],
    data: {
      title: 'Logout',
      loginRequired: true
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuards],
    data: {
      title: 'Register',
      loginRequired: false
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuards],
    data: {
      title: 'Profile',
      loginRequired: true
    }
  }
];

export const AuthRoutingModule = RouterModule.forChild(routes);

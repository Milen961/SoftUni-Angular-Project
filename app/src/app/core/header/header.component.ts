import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
   
  get loggedIn () {
    return this.authService.loggedIn;
  }

  get user() {
    return this. authService.user;
  }
  
  constructor(private authService: AuthService, private router: Router) { }

}

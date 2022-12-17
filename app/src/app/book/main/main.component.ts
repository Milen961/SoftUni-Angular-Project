import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements DoCheck {

   loggedIn = false;

    constructor(private authService: AuthService) {

    }
   ngDoCheck(): void {
     this.loggedIn = this.authService.loggedIn;
   }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-message',
  templateUrl: './home-message.component.html',
  styleUrls: ['./home-message.component.scss']
})
export class HomeMessageComponent {

  @Input() loggedIn = false
  
   constructor(){

   }

}

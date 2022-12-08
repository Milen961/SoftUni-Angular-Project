import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HomeMessageComponent } from './home-message/home-message.component';
import { EmailDirective } from './emailValidator';



@NgModule({
  declarations: [
    LoaderComponent,
    HomeMessageComponent,
    EmailDirective
    
    
  ],
  imports: [
    CommonModule
  ],

  exports:[
    LoaderComponent,
    HomeMessageComponent,
    EmailDirective,

  ]
   
})
export class SharedModule { }

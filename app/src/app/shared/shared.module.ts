import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HomeMessageComponent } from './home-message/home-message.component';
import { EmailDirective } from './emailValidator';
import { RouterModule } from '@angular/router';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    HomeMessageComponent,
    EmailDirective,
    ShortenPipe,
    ElapsedTimePipe
    
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports:[
    LoaderComponent,
    HomeMessageComponent,
    EmailDirective,
    ShortenPipe,
    ElapsedTimePipe
  ]
   
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HomeMessageComponent } from './home-message/home-message.component';



@NgModule({
  declarations: [
    LoaderComponent,
    HomeMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

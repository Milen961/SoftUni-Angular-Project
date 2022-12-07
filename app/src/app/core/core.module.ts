import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { Page404Component } from './page404/page404.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorHandlerComponent,
    Page404Component
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

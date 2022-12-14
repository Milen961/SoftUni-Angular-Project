import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { Page404Component } from './page404/page404.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    ErrorHandlerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule

  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    ErrorHandlerComponent
  ]
})
export class CoreModule { }

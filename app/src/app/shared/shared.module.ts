import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardsComponent } from './guards/guards.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { LoaderComponent } from './loader/loader.component';
import { PipesComponent } from './pipes/pipes.component';
import { ValidatorsComponent } from './validators/validators.component';
import { HomeMessageComponent } from './home-message/home-message.component';



@NgModule({
  declarations: [
    GuardsComponent,
    InterfacesComponent,
    LoaderComponent,
    PipesComponent,
    ValidatorsComponent,
    HomeMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorHandlerComponent } from './core/error-handler/error-handler.component';
import { HomeComponent } from './core/home/home.component';
import { Page404Component } from './core/page404/page404.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'not-found',
    component: Page404Component
  },
  {
    path: 'error',
    component: ErrorHandlerComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

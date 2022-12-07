// import { ErrorHandler, NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './core/home/home.component';
// import { Page404Component } from './core/page404/page404.component';


// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     component: HomeComponent
//   },
//   {
//     path: 'not-found',
//     component: Page404Component
//   },
//   {
//     path: 'error',
//     component: ErrorHandler
//   },
//   {
//     path: 'auth',
//     loadChildren: () => import('./authController/authController.module').then(m => m.AuthModule)
//   },
//   {
//     path: 'theme',
//     loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule)
//   },
//   {
//     path: '**',
//     redirectTo: '/not-found'
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {

// }

import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookResolver } from "./resolving/book.resolving";
import { CreateBookComponent } from "./create-book/create-book.component";

const routes: Routes = [
  {
    path: 'recent',
    component: MainComponent
  },
  {
    path: 'new',
    component: CreateBookComponent
  },
  {
    path: 'detail/:id',
    resolve: {
      book: BookResolver
    },
    component: BookDetailComponent
  }
];

export const BookRoutingModule = RouterModule.forChild(routes);

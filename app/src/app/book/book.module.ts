import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { BookRoutingModule } from './book-routing.module';
import { CreateBookComponent } from './create-book/create-book.component';



@NgModule({
  declarations: [
    CreateBookComponent,
    BookListComponent,
    MainComponent,
    BookDetailComponent,
    RecentPostsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    BookRoutingModule

  ],
  exports: [
    BookListComponent
  ]
})
export class BookModule { }

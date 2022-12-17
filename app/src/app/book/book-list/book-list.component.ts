import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IBook, IPost } from 'src/app/shared/interfaces';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList: IBook[] | null = null;
  recentPosts: IPost[] | undefined;
  errorData = false;
  loggedIn = false;

  constructor(private bookService: BookService, private authService: AuthService, private apiService: ApiService ) { }

  

  ngOnInit(): void {
    this.loadBooks();
    this.fetchPosts();
    
  }

  ngDoCheck(): void {
    this.loggedIn = this.authService.loggedIn;
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: (value) => {
        this.bookList = value;
      },
      error: (error) => {
        this.errorData = true;
        console.log(error);
      }
    });
  }

  fetchPosts(): void{
    this.recentPosts = undefined
    this.apiService.loadPosts().subscribe(posts => this.recentPosts = posts)
  }
   

  // deleteBookPost(bookId: string, postId: string) {
  //   this.bookService.deleteBookPost(bookId, postId).subscribe({
  //     next: () => {
  //       this.loadBooks();
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   });
  // }
}

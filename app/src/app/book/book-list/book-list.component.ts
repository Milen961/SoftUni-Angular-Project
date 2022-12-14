import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IBook } from 'src/app/shared/interfaces';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList : IBook[] | null = null;
  errorData = false

  constructor(private apiService: ApiService, private bookService: BookService) { }

  ngOnInit(): void {
    this.apiService.loadBooks().subscribe({
      next: (value) => {
        this.bookList = value;
      },
      error: (error) => {
        this.errorData = true;
        console.log(error);
      }
    });
  }
  

}

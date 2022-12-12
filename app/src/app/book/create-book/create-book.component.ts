import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent  {
  

  constructor(private bookService: BookService, private router: Router) { }

    createBookHandler(form: NgForm): void {
      if(form.invalid) {return}
      const {bookName, postText} = form.value

      this.bookService.createBook(bookName, postText)
      .subscribe(() => {
        this.router.navigate(['/book/recent'])
      })
    }

}

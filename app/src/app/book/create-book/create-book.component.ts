import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements DoCheck {
  
  loggedIn = false
 

  constructor(private bookService: BookService, private router: Router, private authService: AuthService) { 

       
  }

    createBookHandler(form: NgForm): void {
      if(form.invalid) {return}
      const {bookName, postText} = form.value

      this.bookService.createBook(bookName, postText)
      .subscribe(() => {
        this.router.navigate(['/book/recent'])
      })
    }

    ngDoCheck(): void {
      this.loggedIn = this.authService.loggedIn;
    }

}

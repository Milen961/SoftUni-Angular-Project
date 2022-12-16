import { IBook } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBook(id: string) {
    return this.http.get<IBook>('/api/books/' + id);
  }

  getBooks(maxCount?: number) {
    let url = '/api/books';
    if (maxCount) {
      url += '?limit=5';
    }
    return this.http.get<IBook[]>(url);
  }


  createBook(name: string, description: string, text: string) {
    return this.http.post<IBook>('/api/books/', { bookName: name, description: description ,postText: text });
  }

  updateBook(id: string, name: string, text: string) {
    return this.http.put<IBook>('/api/books/' + id, { bookName: name, postText: text });
  }

  deleteBookPost(bookId: string, postId: string) {
    return this.http.delete<IBook>('/api/books/' + bookId + '/post' + postId);
  }

}

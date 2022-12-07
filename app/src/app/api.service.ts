import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { IBook } from './shared/interfaces/book';
import { IPost } from './shared/interfaces/post';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadBooks() {
    return this.httpClient.get<IBook[]>(`${apiURL}/books`);
  }

  loadBook(id: number) {
    return this.httpClient.get<IBook>(`${apiURL}/books/${id}`);
  }

  loadPosts(limit?: number) {
    return this.httpClient.get<IPost[]>(`${apiURL}/posts${limit ? `?limit=${limit}` : ``}`);
  }

}

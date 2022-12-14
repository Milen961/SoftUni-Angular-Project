import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "src/app/api.service";
import { IBook } from "src/app/shared/interfaces";


@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<IBook | null> {
  constructor(private apiService: ApiService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IBook | null | Observable<IBook> | Promise<IBook> {
    const bookId = route.params['id'];
    if (!bookId) {
      this.router.navigate(['/book/recent']);
      return null;
    }
    return this.apiService.loadBook(bookId);
  }


}
import { Component, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, filter, take } from 'rxjs';
import { apiError } from 'src/app/shared/verifications';


@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnDestroy {

  apiError$ = this.apiError.asObservable();

  constructor(
    @Inject(apiError) private apiError: BehaviorSubject<Error | null>,
    private router: Router
  ) {
    this.apiError$.pipe(debounceTime(0), take(1), filter(val => !val)).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnDestroy(): void {
    this.apiError.next(null);
  }

}


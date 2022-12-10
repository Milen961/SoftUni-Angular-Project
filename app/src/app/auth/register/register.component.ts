import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { catchError, map, of, throwError } from 'rxjs';
import { EmailVerificator } from 'src/app/shared/verifications';
import { emailValidation } from 'src/app/shared/emailValidator';
import { sameValueGroup } from 'src/app/shared/emailValidator/same-value-group';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidation(EmailVerificator)]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validators: [sameValueGroup('password', 'rePassword')]
    })
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  registerHandler() {
    if (this.form.invalid) 
    { return; }
    const { username, email, pass: { password, rePassword } = {} } = this.form.value;
    this.authService.register(username!, email!, password!, rePassword!)
      .subscribe(user => {
        this.router.navigate(['/book/recent']);
      });
  }
}
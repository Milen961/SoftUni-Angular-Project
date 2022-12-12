import { Component } from '@angular/core';
import {  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';
import { emailValidation } from 'src/app/shared/emailValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.group({
    email: ['', [Validators.required, emailValidation()]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {

  }

  loginHandler(){
    if (this.form.invalid) { return; } 
    const { email, password } = this.form.value;
    this.authService.login(email!, password!)
      .subscribe(user => {
        this.router.navigate(['/book/recent']);
      });

    
  }
}
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { emailValidation } from 'src/app/shared/emailValidator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  showEditMode = false;
  formSubmitted = false;

  counter = 1;

  get user() {
    const { username, email } = this.authServie.user!;
   
    return {
      username,
      email,

    };
  }

  get addresssesArray() {
    return (this.form.get('addresses') as FormArray);
  }

  form!: FormGroup;

  constructor(private fb: FormBuilder, private authServie: AuthService) {
    this.createForm({ ...this.user });
  }

  createForm(formValue: any) {
    this.form = this.fb.group({
      username: [formValue.username, [Validators.required, Validators.minLength(5)]],
      email: [formValue.email, [Validators.required, emailValidation()]],
 
    })

  }

  addNewAddress(): void {
    this.counter++;
    this.createForm(this.form.value);
  }

  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if (this.showEditMode) {
      this.formSubmitted = false;
    }
  }

  saveProfile(): void {
    this.formSubmitted = true;
    if (this.form.invalid) { return; }
    const { username, email } = this.form.value;
    this.authServie.setProfile(username, email).subscribe(() => {
      this.toggleEditMode();
    });
  }
}

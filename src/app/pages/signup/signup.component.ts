import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDbService } from 'src/app/services/user-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signForm!: FormGroup;

  oninit() {
    this.signForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    this.user.conectToDb(form.value);
    console.log(form.value);
    this.router.navigate(['/login']);
  }
  constructor(
    private fb: FormBuilder,
    private user: UserDbService,
    private router: Router,
  ) {
    this.oninit();
  }
}

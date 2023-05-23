/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router'
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.oninit();
  }
  loginForm!: FormGroup;
  url: string = 'https://easy-tan-starfish-hem.cyclic.app/usuarios/login';
  id?: string | null;
  token!: string;
  msjloading?: string;
  errormsj?: string;
  router!:Router;
  oninit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login(form: FormGroup) {
    const loading = true
    if(loading){
      this.msjloading = "Loading..."
    }
    const req = this.http.post(this.url, form.value,{
      'headers': {
          "Content-Type": "application/json",
      }
  }).pipe(
    catchError((error:HttpErrorResponse):Observable<any>=>{
      console.log(error.error.message)
      return throwError(()=> {
      const err = new Error('usuario y/o contraseña incorrectos', {
      cause: {
        name: 'error',
        message:'usuario y/o contraseña incorrectos'
      }
      
      })
      console.log(err.cause)
      this.errormsj = err.message
      })
 
    })
  )



    req.subscribe(data => {
      this.token = data.toLocaleString();
      const helper = new JwtHelperService();
      this.id = helper.decodeToken(this.token).id
      localStorage.setItem('token', this.token);
      localStorage.setItem('id', this.id as string);
      console.log(this.token, `id: ${this.id}`);
      const res =  this.http.get(`https://easy-tan-starfish-hem.cyclic.app/usuarios/${this.id}`,{
      'headers': {
          "Content-Type": "application/json",
      }
  });
    res.subscribe(data => {
      console.log(data);
    }
    );
      }
    );

    setTimeout(()=>{
      this.router.navigate(['/cards'])
    }, 10000)
  

}

  }




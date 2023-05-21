/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, } from '@angular/material/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { MaterialExampleModule } from './material.module';
import { PviewComponent } from './view/pview/pview.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDbService } from './services/user-db.service';
import {NgOptimizedImage} from '@angular/common';
import { ResponseTimeoutInterceptor as int } from './interceptors/response-timeout.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    PviewComponent,
    LoginComponent,
    SignupComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    NgOptimizedImage,

    
    
 

  ],
  providers: [UserDbService,  { provide: HTTP_INTERCEPTORS, useClass: int, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }

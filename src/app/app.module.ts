/* eslint-disable prettier/prettier */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from './material.module';
import { PviewComponent } from './view/pview/pview.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDbService } from './services/user-db.service';
import {NgOptimizedImage} from '@angular/common';
import { MainponeComponent } from './pages/mainpone/mainpone.component';
import { MainptwoComponent } from './pages/mainptwo/mainptwo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactappComponent } from './pages/reactapp/reactapp.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';




@NgModule({
  declarations: [
    AppComponent,
    PviewComponent,
    LoginComponent,
    SignupComponent,
    MainponeComponent,
    MainptwoComponent,
    ReactappComponent,
    ProyectsComponent

 
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
    FontAwesomeModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  providers: [UserDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

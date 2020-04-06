import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,FormsModule,BrowserAnimationsModule
  ]
})
export class UserModule { }

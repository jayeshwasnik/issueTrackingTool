import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//for routing module
import {RouterModule,Routes} from '@angular/router';


import {UserModule} from './user/user.module';
//import {ListManagementModule} from './list-management/list-management.module';

//import statements for services
//import { ListService } from './list.service';

//for angular forms
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {SelectiveIssueDescriptionComponent} from './issue-description/selective-issue-description/selective-issue-description.component';
import {SearchComponent} from './search/search/search.component';
import {IssueViewComponent} from './issue-view/issue-view/issue-view.component';
import { HttpClientModule } from '@angular/common/http'; 

import { ToastrModule } from 'ngx-toastr';

//for socila media login
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

//for file upload
import { FileSelectDirective } from 'ng2-file-upload';

//for text editor
import { CKEditorModule } from 'ngx-ckeditor';

//for reactive forms
import { ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';




let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("611773413586-b7mohb8s7cqmgd73mb7qunti5taembq6.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("202379754515657")
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,SelectiveIssueDescriptionComponent,DashboardComponent,FileSelectDirective,SearchComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,SocialLoginModule,ReactiveFormsModule, DataTablesModule,
    AppRoutingModule,BrowserAnimationsModule,FormsModule,UserModule, ToastrModule.forRoot(),CKEditorModule,
    RouterModule.forRoot([ 
	{path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'search/:searchedValue',component:SearchComponent},
    {path:'viewIssue/:issueId',component:IssueViewComponent},
    {path:'signup',component:SignupComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'issueDescription',component:SelectiveIssueDescriptionComponent},
    {path:'*',component:LoginComponent},
    {path:'**',component:LoginComponent},
    ])
  ],
  providers: [    {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

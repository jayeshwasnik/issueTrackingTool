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
// import { HomePageComponent } from './list-management/home-page/home-page.component';
// import { ListViewComponent } from './list-management/list-view/list-view.component';
// import { ListEditComponent } from './list-management/list-edit/list-edit.component';
// import { ListCreateComponent } from './list-management/list-create/list-create.component';

import { HttpClientModule } from '@angular/common/http'; 

import { ToastrModule } from 'ngx-toastr';

//for socila media login
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
 
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
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,SocialLoginModule,
    AppRoutingModule,BrowserAnimationsModule,FormsModule,UserModule, ToastrModule.forRoot(),
    RouterModule.forRoot([ 
	{path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'signup',component:SignupComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'*',component:LoginComponent},
    {path:'**',component:LoginComponent}
    ])
  ],
  providers: [    {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

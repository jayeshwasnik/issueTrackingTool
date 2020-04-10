import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { Cookie } from 'ng2-cookies/ng2-cookies';

import { CookieService } from 'ngx-cookie-service';

//for toastr
import { ToastrService } from 'ngx-toastr';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title = 'SocialMediaAuthentication';
  public assginuseerdetails;
  public userimage;
  public username; 
  public email;
  public password;
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private _route: ActivatedRoute, private router: Router, public appService: AppService,private toastr:ToastrService,private cookieService:CookieService,private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      //setting authtoken to be checked at dashboard
      //this.cookieService.set('authToken',this.user.authToken);
      //for differentiating login from social and local ,should do it with local storage
      //this.cookieService.set('loginMethod',"social");
      
      console.log(this.cookieService.get('authToken'))
    });
  }
  signInWithGoogle(): void {
    // localStorage.clear();
    // this.authService.signOut();
    // this.cookieService.deleteAll;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    let data = {
      userName: `${this.user.firstName}${this.user.lastName}GOOGLE`,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      mobile: "11111111111",
      email: this.user.email,
      password: "googlePassword",
      social:true
      //apiKey: this.apiKey
    }


     this.appService.userSignup(data).subscribe((apiResponse)=>{
      if (apiResponse.status===200) 
      {this.toastr.success("Login Succesful");
      console.log(apiResponse)
       this.router.navigate(['dashboard']);
     }
    else if (apiResponse.status==403){
      //this.toastr.success("Logging you in")
      let logindata={email:this.user.email,
        password:"googlePassword"};
        console.log(logindata);
this.appService.userLogin(logindata).subscribe(apiResponse=>{
if (apiResponse.status===200) 
{this.toastr.success("Login Succesful");
 this.router.navigate(['dashboard']);


console.log(apiResponse);
//for setting cookies
this.cookieService.set('authToken',apiResponse.data.authToken);
localStorage.setItem("authToken",apiResponse.data.authToken);
//setting the data in local storage
this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
}
},




error=>{this.toastr.error("there was an error")});
console.log(data);


  }
    })
    //this.router.navigate(['dashboard']);
  }
 


  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    //console.log(this.user.facebook);
    //this.router.navigate(['dashboard']);
    let data = {
      userName: `${this.user.firstName}${this.user.lastName}FB`,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      mobile: "11111111111",
      email: this.user.email,
      password: "fbPassword",
      social:true
      //apiKey: this.apiKey
    }


     this.appService.userSignup(data).subscribe((apiResponse)=>{
      if (apiResponse.status===200) 
      {this.toastr.success("Login Succesful");
      console.log(apiResponse)
       this.router.navigate(['dashboard']);
     }
    else{this.toastr.error("some error occured")}
    })
  } 
 
  signOut(): void {
    //this is working but when I do it from other componenents it is not working
     this.authService.signOut();
    console.log("signed out  of social logins");
 }





public goToSignUp(){
this.router.navigate(['signup']);

}

public signinFunction(){
let data={email:this.email,
          password:this.password};
          console.log(data);
this.appService.userLogin(data).subscribe(apiResponse=>{
  if (apiResponse.status===200) 
  {this.toastr.success("Login Succesful");
   this.router.navigate(['dashboard']);
  

console.log(apiResponse);
//for setting cookies
this.cookieService.set('authToken',apiResponse.data.authToken);
localStorage.setItem("authToken",apiResponse.data.authToken);
//setting the data in local storage
this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
  }
},




error=>{this.toastr.error("there was an error")});
console.log(data);


}


}

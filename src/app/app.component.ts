import { Component } from '@angular/core';
import { AppService } from '../app/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
//for toastr
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "angularx-social-login";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'issue-tracking-tool';

//this constructor was not there in starting and all the dependencies,I added it
  constructor(private _route: ActivatedRoute, private router: Router, public appService: AppService,private toastr:ToastrService,private cookieService:CookieService
    ,private authService: AuthService){};





public signOutAppComponent:any =() =>{

  this.authService.signOut();
  console.log("signed out  of social logins");
  // localStorage.clear();
    // this.authService.signOut();
     this.cookieService.deleteAll;
 
  localStorage.clear();
// if(this.cookieService.get('loginMethod')=='social'){
//   this.authService.signOut();
//   console.log("signed out  of social logins");
//   this.cookieService.delete('loginMethod');
// }
// else{
//   this.appService.logout()
//   .subscribe((apiResponse) => {


//     if (apiResponse.status === 200) {
//       console.log("logout called")
//       this.cookieService.delete('authtoken');

//       this.cookieService.delete('receiverId');

//       this.cookieService.delete('receiverName');


      

//       this.router.navigate(['/']);

//     } else {
//       this.toastr.error(apiResponse.message)

//     } // end condition

//   }, (err) => {
//     this.toastr.error('some error occured')


//   });


// }
}

}

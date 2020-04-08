import { Component, OnInit ,ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import {AppService} from './../../app.service';
import {CookieService} from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public authToken:any;
  public userInfo:any;

  constructor(public Appservice:AppService,public cookieService:CookieService,public router:Router,private toastr:ToastrService ) { }

  ngOnInit() {
    this.authToken=localStorage.getItem("authToken");
    this.userInfo=this.Appservice.getUserInfoInLocalStorage;
    this.checkStatus();

  }


  public checkStatus:any=()=>{
    if(localStorage.getItem("authToken")===undefined || localStorage.getItem("authToken")==='' || localStorage.getItem("authToken")===null){
      this.router.navigate(['/']);
     
      console.log("authtoken not found");
      return false;
    }else{
      console.log(localStorage.getItem("authToken"))
      console.log("authtoken  found");
  return true;
 
    }
  //localStorage.getItem("authToken")  


}


// public checkStatus:any=()=>{
//   if(this.cookieService.get('authToken')===undefined || this.cookieService.get('authToken')==='' || this.cookieService.get('authToken')===null){
//     this.router.navigate(['/']);
   
//     console.log("authtoken not found");
//     return false;
//   }else{
//     console.log(this.cookieService.get('authToken'))
//     console.log("authtoken  found");
// return true;

//   }



// }
}

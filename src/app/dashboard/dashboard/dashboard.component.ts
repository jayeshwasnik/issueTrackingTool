import { Component, OnInit ,ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from "./../../issue.service";

import {AppService} from './../../app.service';
import {CookieService} from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
@Component({

  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
 
  public authToken:any;
  public userInfo:any;
  public issues=[];
  public searchedValue;

  showContent;
  //headElements = ['id', 'first', 'last', 'handle'];
  //dtOptions: any = {};

  constructor(public appService:AppService,public cookieService:CookieService,public router:Router,private toastr:ToastrService,public issueService:IssueService ) { }

  ngOnInit() {
    
    setTimeout(()=>this.showContent=true, 250);
    this.authToken=localStorage.getItem("authToken");
    this.userInfo=this.appService.getUserInfoInLocalStorage;
    this.checkStatus();
    this.getUserIssues();
     
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

public getUserIssues:any=()=>{
  let userinfo=this.appService.getUserInfoInLocalStorage();
  let loggedInUser=userinfo.userName;
  console.log("value passed to getissuues"+loggedInUser)
this.issueService.getIssuesOfUser(loggedInUser).subscribe((response)=>{
console.log(response)
this.issues=response;
console.log(this.issues)

})

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

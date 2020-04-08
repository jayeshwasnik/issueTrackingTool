import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/toPromise';

//to use http params
import{HttpHeaders,HttpParams} from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public baseUrl="http://localhost:3000/api/v1";
  
  public apiKey='jayeshApiKey';

  constructor(public http:HttpClient,private cookieService:CookieService) { }

  public userSignup(data):Observable<any>{
    const params=new HttpParams()
    .set("firstName",data.firstName)
      .set("password",data.password)
        .set("lastName",data.lastName)
          .set("email",data.email)
            .set("mobileNumber",data.mobile)
              .set("apiKey",this.apiKey);
              return this.http.post(`${this.baseUrl}/users/signup`,params);
    

  }


    
  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken',this.cookieService.get('authtoken'))

    return this.http.post(`${this.baseUrl}/users/logout`, params);

  } // end logout function



  public setUserInfoInLocalStorage(data){
    localStorage.setItem("userInfo",JSON.stringify(data));
  }

  public getUserInfoInLocalStorage(){
    return JSON.parse(localStorage.getItem("userInfo"));
  }
  public userLogin(data): Observable<any>{
    const params=new HttpParams()
      .set("password",data.password)
          .set("email",data.email) 
          .set("apiKey",this.apiKey);
          this.cookieService.set('loginMethod',"local");      
   return this.http.post(`${this.baseUrl}/users/login`,params);
    console.log(data);
  }

}

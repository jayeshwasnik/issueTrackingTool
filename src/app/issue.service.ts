import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IssueService {
  
  public baseUrl = "http://localhost:3000/api/v1/issue";
  public headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient) { }

  
  // Get AllIssues
   getAllIssues() : Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllIssues`)
  }



    // Create New Issue
    createIssue(data): Observable<any> {
      var formData: any = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("assignee", data.assignee);
      formData.append("watcher", data.watcher);
      formData.append("reporter", data.reporter);
      formData.append("comments", data.comments);
      formData.append("attachment", data.attachment);
  
      return this.http.post<Issue>(`${this.baseUrl}/create-issue`, formData, {
        reportProgress: true,
        observe: 'events'
      })
    }


     // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}

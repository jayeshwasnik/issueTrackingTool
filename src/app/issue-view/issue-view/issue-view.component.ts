import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from "./../../issue.service";

@Component({
  selector: 'app-issue-view',
  templateUrl: './issue-view.component.html',
  styleUrls: ['./issue-view.component.css']
})
export class IssueViewComponent implements OnInit {
public issueId;
public issue;
public title="hgvhgv";
fullName: string = "Hello JavaTpoint";    

  constructor(public _route:ActivatedRoute,public issueService:IssueService ) { }

  ngOnInit(): void {
    this.issueId = this._route.snapshot.paramMap.get('issueId');
    console.log(this.issueId);
    this.getIssues()
  }




  getIssues():any{
    
  
  this.issueService.getIssueById(this.issueId).subscribe((response)=>{
    console.log(response);
    this.issue=response;
    console.log(this.issue[0].title);

  })
  
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from "./../../issue.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public showContent;
  public Issues=[];
  public searchValue;
  constructor(private _route: ActivatedRoute,public issueService:IssueService) { }

  ngOnInit(): void {
    setTimeout(()=>this.showContent=true, 250);
    this.searchValue = this._route.snapshot.paramMap.get('searchedValue');
    console.log(this.searchValue);
    this.getIssues()
  }


public getIssues:any=()=>{
  this.issueService.searchIssues(this.searchValue).subscribe((response)=>{
    console.log(response)
    this.Issues=response;
    console.log(this.Issues)
    })

}

}

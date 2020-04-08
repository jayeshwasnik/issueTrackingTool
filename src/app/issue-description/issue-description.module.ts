import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectiveIssueDescriptionComponent } from './selective-issue-description/selective-issue-description.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SelectiveIssueDescriptionComponent],
  imports: [
    CommonModule,RouterModule.forChild([ 
      { path: 'issueDescription', component: SelectiveIssueDescriptionComponent }
  ])
  ]
})
export class IssueDescriptionModule { }

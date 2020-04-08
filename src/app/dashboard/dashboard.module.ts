import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import {SelectiveIssueDescriptionComponent} from '../issue-description/selective-issue-description/selective-issue-description.component';

@NgModule({
  declarations: [DashboardComponent,SelectiveIssueDescriptionComponent],
  imports: [
    CommonModule,RouterModule]
})
export class DashboardModule { }

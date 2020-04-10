import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueViewComponent } from './issue-view/issue-view.component';
import { DataTablesModule } from 'angular-datatables';

//for angular forms
import {FormsModule,ReactiveFormsModule}  from '@angular/forms';
@NgModule({
  declarations: [IssueViewComponent],
  imports: [
    CommonModule,FormsModule,DataTablesModule
  ]
})
export class IssueViewModule { }

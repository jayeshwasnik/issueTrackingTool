import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,DataTablesModule
  ]
})
export class SearchModule { }

import { Component, OnInit } from '@angular/core';
//for file upload
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { FormBuilder, FormGroup } from "@angular/forms";
import { IssueService } from "./../../issue.service";
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

//const URL = 'http://localhost:3000/api/v1/image';



@Component({
  selector: 'app-selective-issue-description',
  templateUrl: './selective-issue-description.component.html',
  styleUrls: ['./selective-issue-description.component.css']
})


 

export class SelectiveIssueDescriptionComponent implements OnInit {
 // const URL = 'http://localhost:3000/api/newIssue';

public title;
public description;
public assignee;
public watcher;
//public timeOfCreation;
//public status;
public reporter;
public comments;

public preview: string;
public form: FormGroup;
public percentDone: any = 0;
public  users = [];


//for text editor
public editorValue: string = '';

//for file uploader
//public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor( public fb: FormBuilder,
    public router: Router,
    public issueService: IssueService) {
      // Reactive Form
    this.form = this.fb.group({
      title: [''],
      attachment: [null],
      description:[''],
      assignee: [''],
      watcher: [''],
      reporter: [''],
      comments: ['']
    
    })
     }



  ngOnInit() {
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //      console.log('FileUpload:uploaded:', item, status, response);
    //      alert('File uploaded successfully');
    //  };
  }


  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      attachment: file
    });
    this.form.get('attachment').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }


  submitForm() {
    let data = {
      firstName: this.form.value.name,
      title: this.form.value.title,
      description: this.form.value.description,
      assignee: this.form.value.assignee,
      watcher: this.form.value.watcher,
      //have to add the logged in user
      reporter: this.form.value.reporter,
      comments: this.form.value.comments,
      attachment: this.form.value.attachment
    }


    this.issueService.createIssue(
     data
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.percentDone = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.percentDone}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          this.percentDone = false;
          this.router.navigate(['dashboard'])
      }
    })
  }













//  public createIssue()
//  {console.log(this.editorValue);
//   console.log(this.comments);
  
  // let data = {
  //   title: this.title,
  //   description: this.editorValue,
  //   assignee: this.assignee,
  //   watcher: this.watcher,
  //   status: this.status,
  //   reporter:this.reporter,
  //   comments:this.comments
  // }
  


   
 }


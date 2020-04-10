import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { IssueService } from "./../../issue.service";
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';




@Component({
  selector: 'app-selective-issue-description',
  templateUrl: './selective-issue-description.component.html',
  styleUrls: ['./selective-issue-description.component.css']
})


 

export class SelectiveIssueDescriptionComponent implements OnInit {
 

public title;
public description;
public assignee;
public watcher;
public reporter;
public comments;
public user;

public preview: string;
public form: FormGroup;
public percentDone: any = 0;
//public  users = [];
files:string  []  =  [];

//for text editor
public editorValue: string = '';

//for file uploader
//public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor( public fb: FormBuilder,
    public router: Router,public appService: AppService,
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
    this.setUsers();
  }



public Users=[];

 public setUsers=()=>{
  this.appService.getAllUserNames().subscribe((response)=>{
    var i=0;
    for(const x in response){
     
      this.Users[i]=response[x].userName;
      i++;
       }
    
      })
    }



  //working upload files function

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




  // uploadFile(event)  {
  //   for  (var i =  0; i <  event.target.files.length; i++)  {  
  //       this.files.push(event.target.files[i]);
  //   }
  // }

  changeAssignee(event){
    const assigneevar=event.target.value;
    this.form.patchValue({
      assignee: assigneevar.slice(3)
    });
    this.form.get('assignee').updateValueAndValidity()
  }


  changeWatcher(event){
    const watcherevar=event.target.value;
    this.form.patchValue({
      watcher: watcherevar.slice(3)
    });
    this.form.get('watcher').updateValueAndValidity()
  }


  submitForm() {
    
    let userinfo=this.appService.getUserInfoInLocalStorage();
    let loggedInUser=userinfo.userName;
    let data = {
     
      title: this.form.value.title,
      description: this.form.value.description,
      assignee: this.form.value.assignee,
      watcher: this.form.value.watcher,
      reporter: loggedInUser,
      comments: this.form.value.comments,
      attachment: this.form.value.attachment
    }

    console.log(data);


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
          console.log('Issue successfully created!', event.body);
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


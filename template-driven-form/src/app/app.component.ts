import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
@ViewChild('f')signupForm!:NgForm;
answer:any='';
answer1:any='';
answer2:any='';
answer3:any='';
answer4:any=''
model: any = {};
password:any='';
formFields=["Tamil Nadu","Kerala"];
genders =['male','female']
defaultQuestion = 'pet';
defaultDrop = 'Advanced'
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
  submitted:boolean=false;
  user={
    username:"",
    email:'',
    password:'',
    secretQuestion:'',
    answer:'',
    dropbox:'',
    gender:''
    }
    selectedOption:string ='';
    ngOnInit(): void {
      this.selectedOption='Advanced'
    }
onSubmit(){

this.submitted=true;
    console.log(this.signupForm);
this.user.username=this.signupForm.value.userData.username;
this.user.email=this.signupForm.value.userData.email;
this.user.password=this.signupForm.value.userData.password;
this.user.secretQuestion=this.signupForm.value.userData.secret;
this.user.answer=this.signupForm.value.userData.answer;
this.user.dropbox=this.signupForm.value.userData.dropbox;
this.user.gender=this.signupForm.value.userData.gender;
}
}

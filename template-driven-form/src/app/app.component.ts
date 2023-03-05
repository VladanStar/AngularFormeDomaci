import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('f')signupForm!:NgForm;
answer:any='';
answer1:any='';
answer2:any='';


defaultQuestion = 'pet'
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

onSubmit(){
console.log(this.signupForm)
}
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { notes, users } from '../../../db/db';
import { UserModel } from '../../../model/userModel';
import { NoteModel } from '../../../model/noteModel';
import axios from 'axios';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private router:Router,private http: HttpClient){}

  btnClass = "disabled";

  userNameValue:String = '';
  emailValue:String = '';
  passwordValue:String = '';

  onCheckBoxSelecting(event:any){
    if(event.target.checked == true){
        this.btnClass = "enable";
    }else{
      this.btnClass = "disabled";
    }
  }
  onLoginBtnClick(){
    console.log(this.userNameValue+" e "+ this.emailValue+" p "+this.passwordValue);
    
    // this.router.navigateByUrl('/home');

//     const http =new XMLHttpRequest();
//     const user:UserModel =new UserModel("",this.userNameValue,"",this.emailValue,this.passwordValue,"");
//     http.onreadystatechange =() =>{
//         //check state
//         if (http.readyState == 4){
//             if (http.status == 200){
//                 const data = JSON.parse(http.responseText);
// -                
//                   users.push(new UserModel(data.userId,data.firstName,data.lastName,data.email,data.password,data.profilePic));
                
//                   if(data.email == this.emailValue && data.password == this.passwordValue){
//                          this.router.navigateByUrl('/home');
//                   }else{
//                     alert("It Seems Wrong Credential !!!! Try Again!");
//                   }
               


//             }else {
//                 console.error("Failed");
//                 console.error("Status Received" , http.status);
//                 console.error("Processing Stage" , http.readyState);
//             }
//         }else{
//             console.log("Processing stage", http.readyState);
//         }
//     }
 
//          http.open("GET","http://localhost:8080/api/v1/users/getUser",true);
//          http.setRequestHeader("_user",JSON.stringify(user));
//          http.setRequestHeader("Content-Type","application/json");
//          http.send();
  
    
  }

}

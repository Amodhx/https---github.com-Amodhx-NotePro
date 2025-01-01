import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { notes, users } from '../../../db/db';
import { UserModel } from '../../../model/userModel';
import { NoteModel } from '../../../model/noteModel';
import axios from 'axios';
import swal from 'sweetalert2' 

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
  async onLoginBtnClick(){
    const payload = { email: this.userNameValue, password: this.passwordValue };

    try {
      const response = await axios.post('http://localhost:300/api/v1/user/signIn', payload);
      if (response.status === 201) {
        localStorage.setItem('jwtKey',response.data)
      this.router.navigateByUrl('/home');
      } else {
        console.log('Unexpected status:', response.status);
      }
    } catch (err: any) { // Explicitly typing as `any` to access properties
      if (err.response && err.response.status === 401 || err.response.status === 403) {
        swal.fire({
          title: "The Credentials?",
          text: "Invalid Credentials!",
          icon: "error"
        });
      } else {
        console.error('An error occurred:', err);
        alert('An unexpected error occurred. Please try again later.');
      }
    }

    
    
  }

}

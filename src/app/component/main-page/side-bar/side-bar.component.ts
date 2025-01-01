import { Component } from '@angular/core';
import { MainPageComponent } from '../main-page.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
    constructor(private router:Router,private http: HttpClient){}
  

  openModal(){
    let mn = new MainPageComponent();
    mn.openModal();
  }

  onLogOutClick(){
    console.log("AAA");
    
    this.router.navigateByUrl('/login');
  }
}

import { Component } from '@angular/core';
import { MainPageComponent } from '../main-page.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  openModal(){
    let mn = new MainPageComponent();
    mn.openModal();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteModel } from '../../../model/noteModel';
import { SideBarComponent } from '../main-page/side-bar/side-bar.component';

@Component({
  selector: 'app-view-card',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './view-card.component.html',
  styleUrl: './view-card.component.css'
})
export class ViewCardComponent {
  cardValues !: NoteModel;
  constructor(private route:ActivatedRoute,){
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['cardValues']) {
        this.cardValues = JSON.parse(params['cardValues']);
      }
    });
    console.log("AAAA"+this.cardValues.createDate);
    
  }

}

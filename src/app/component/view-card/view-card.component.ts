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
  noteTitle:String = ''
  noteDesc:String = ''
  createdDate:String = ''
  constructor(private route:ActivatedRoute,){
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['cardValues']) {
        this.cardValues = JSON.parse(params['cardValues']);
      }
    });
    this.noteDesc = this.cardValues.noteDesc
    this.noteTitle = this.cardValues.noteTitle
    this.createdDate = this.cardValues.createDate

  }

}

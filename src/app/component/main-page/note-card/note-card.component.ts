import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { NoteModel } from '../../../../model/noteModel';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { notes } from '../../../../db/db';
import { animationFrameScheduler } from 'rxjs';


@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent{
  @Input()
  cardValues?:NoteModel = new NoteModel("dsa","sda","das","dsa","dsa","dsa");

  constructor(private elementRef: ElementRef, private router:Router) {
  }
  currentBackgroundColor = 'white'
  backgroundColor = "white"
  color = "white";
  fontColor = "black";
  onMouseEnter(){
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.style.borderRadius = "15px";
    this.currentBackgroundColor = this.getBackgroundColor(this.cardValues?.priorityLevel)
    
  }
  getBackgroundColor(priority:any ) {
    switch (priority) {
      case 'High':
        return '#FFC1C1';
      case 'Medium':
        return '#FFF5BA';
      case 'Low':
        return '#D4F8E8';
      default:
        return '#FFFFFF';
    }
  }
  getBorderColor(priority:any) {
    switch (priority) {
      case 'High':
        return '#FFC1C1';
      case 'Medium':
        return '#FFF5BA';
      case 'Low':
        return '#D4F8E8';
      default:
        return '#43BBFF';
    }
  }

  truncateText(text: any, wordLimit: number): string {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  }

  onMouseLeave(){
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.style.backgroundColor = 'white';
    this.fontColor = 'black'
    this.currentBackgroundColor = 'white'
  }
  onCardClick() {
    console.log("A");
    
    this.router.navigate(['/view-card'], {
      queryParams: { cardValues: JSON.stringify(this.cardValues) }
    });
  }
}

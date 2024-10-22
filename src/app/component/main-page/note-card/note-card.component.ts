import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { NoteModel } from '../../../../model/noteModel';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { notes } from '../../../../db/db';


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

  constructor(private elementRef: ElementRef, private router:Router) {}
  text = "No pipe found with name 'slice'. No pipe found with name 'slice'. No pipe found with name 'slice'. No pipe found with name 'slice'.No pipe found with name 'slice'.No pipe found with name 'slice'.No pipe found with name 'slice'.No pipe found with name 'slice'.No pipe found with name 'slice'.No pipe found with name 'slice'.No pipe found with name 'slice'. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit harum magnam illum ex, laborum, minus, dignissimos est quod ipsa sequi sunt esse possimus perspiciatis ullam! Ullam tempore sapiente ut. Voluptatum";
  color = "white";
  fontColor = "black";
  onMouseEnter(){
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.style.borderRadius = "15px";
    nativeElement.style.fontColor = "white";
    nativeElement.style.backgroundColor = "#43BBFF"
  }

  onMouseLeave(){
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.style.backgroundColor ="white";
    this.fontColor = "black";
  }
  onCardClick() {
    this.router.navigate(['/view-card'], {
      queryParams: { cardValues: JSON.stringify(this.cardValues) }
    });
  }
}

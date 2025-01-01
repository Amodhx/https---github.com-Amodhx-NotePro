import { Component } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { notes } from '../../../db/db';
import { NoteModel } from '../../../model/noteModel';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import axios from 'axios';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SideBarComponent,NoteCardComponent,FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  noteList:NoteModel[] = notes;
  noteTitle:string = '';
  noteDesc: string = '';
  priorityLevel:string = ''

  openModal(): void {
    const modalElement = document.getElementById('addNoteModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  saveNote(): void {
    console.log('Note saved:', this.noteDesc);
    this.noteDesc = ''; // Clear the note content after saving
    // window.location.reload()
    console.log(notes.length);
    
  }
  constructor(){
    this.loadCardValues();
  }
  async loadCardValues(){
    const notesList = await axios.get('http://localhost:300/api/v1/note/getAllNotes', {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtKey')}`
      }
    });
    notes.length = 0
    await notesList.data.map((note:NoteModel) =>{
    notes.push(note)
    })
  }
  

}

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
  async saveNote(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const noteDataToSave = {
      "note_id" : "",
      "noteTitle" : this.noteTitle,
      "noteDesc" : this.noteDesc,
      "createDate" :  `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`,
      "priorityLevel" : this.priorityLevel,
      "userEmail" : ""
    }
    console.log(noteDataToSave);
    
    const response = await axios.post('http://localhost:300/api/v1/note/saveNote',noteDataToSave,
    {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtKey')}`,
        },
      }
    );
    console.log(response);
    notes.push(new NoteModel("1",this.noteTitle,this.noteDesc,`${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`,this.priorityLevel,""))
    const modalElement = document.getElementById('addNoteModal');
    console.log(modalElement);
    
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.hide();  // This hides the modal
    }
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

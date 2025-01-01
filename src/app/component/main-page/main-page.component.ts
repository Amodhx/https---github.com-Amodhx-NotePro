import { Component } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { notes } from '../../../db/db';
import { NoteModel } from '../../../model/noteModel';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SideBarComponent,NoteCardComponent,FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  noteList:NoteModel[] = notes;

  noteContent: string = '';

  openModal(): void {
    const modalElement = document.getElementById('addNoteModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  saveNote(): void {
    console.log('Note saved:', this.noteContent);
    this.noteContent = ''; // Clear the note content after saving
  }
  constructor(){
//     let id:String = users[0].userId;
//     const http =new XMLHttpRequest();
//     http.onreadystatechange =() =>{
//       //check state
//       if (http.readyState == 4){
//           if (http.status == 200){
//               const data = JSON.parse(http.responseText);
// -                
//             data.forEach((note:NoteModel) => {
//               notes.push(new NoteModel(note.noteId,note.noteTitle,note.noteDesc,note.createDate,note.priorityLevel,note.userId));
//             });
//             notes.forEach((note:NoteModel)=>{
//               console.log(note);
              
//             })
//           }else {
//               console.error("Failed");
//               console.error("Status Received" , http.status);
//               console.error("Processing Stage" , http.readyState);
//           }
//       }else{
//           console.log("Processing stage", http.readyState);
//       }
//   }

//        http.open("GET","http://localhost:8080/api/v1/notes/getNotes/"+id,true);
//        http.setRequestHeader("Content-Type","application/json");
//        http.send();
  }
  

}

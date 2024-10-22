export class NoteModel{
    noteId;
    noteTitle
    noteDesc
    createDate;
    priorityLevel;
    userId;

    
    constructor(noteId:String,noteTitle:String,noteDesc:String,createDate:String,priorityLevel:String,userId:String){
        this.noteId = noteId;
        this.noteTitle = noteTitle;
        this.noteDesc = noteDesc;
        this.createDate = createDate;
        this.priorityLevel = priorityLevel;
        this.userId = userId;
    }

    setNoteId(noteId:String){
        this.noteId = noteId;
    }
    setNoteTitle(noteTitle:String){
        this.noteTitle = noteTitle;
    }
    setNoteDesc(noteDesc:String){
        this.noteDesc = noteDesc;
    }
    setCreateDate(createDate:String){
        this.createDate = createDate;
    }
    setPriorityLvl(priorityLevel:String){
        this.priorityLevel = priorityLevel;
    }
    setUserId(userId:String){
        this.userId = userId;
    }

    getNoteId(){
        return this.noteId;
    }
    getNoteTitle(){
        return this.noteTitle;
    }
    getNoteDesc(){
        return this.noteDesc;
    }
    getCreateDate(){
        return this.createDate;
    }
    getPriorityLvl(){
        return this.priorityLevel;
    }
    getUserId(){
        return this.userId;
    }
}
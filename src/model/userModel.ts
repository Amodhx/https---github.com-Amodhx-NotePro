import { NoteModel } from "./noteModel";

  export class UserModel{
    userId;
    firstName;
    lastName;
    email;
    password;
    profilePic;
    constructor(userId:String,firstName:String,lastName:String,email:String,password:String,profilePic:String){
        this.userId = userId;
        this.firstName=  firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.profilePic = profilePic;

    }
    
    setUserId(userId:String){
        this.userId = userId;
    }
    setfirstName(firstName:String){
        this.firstName=  firstName;
    }
    setLastName(lastName:String){
        this.lastName = lastName;
    }
    setEmail(email:String){
        this.email = email;
    }
    setPassword(password:String){
        this.password = password;
    }
    setProfilePic(profilePic:String){
        this.profilePic = profilePic;
    }

    getUserId(){
        return this.userId;
    }
    getfirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
    getProfilePic(){
        return this.profilePic;
    }


}


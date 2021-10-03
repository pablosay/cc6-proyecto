import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioActualService {
  log_status: boolean;
  type_user: string;
  userid:string;
  constructor() {
    this.log_status = false;
    this.type_user = "";
    this.userid = "";
  }
  //Devuelve el estado in true/out false
  getLoginStatus(){
    return this.log_status;
  }
  //Se inicio sesion
  loggedIn(){
    this.log_status = true;
  }
  loggedUser(type:string, user:string){
    this.userid = user;
    this.type_user = type;
  }
  getLoggedUser(){
    return this.userid;
  }
  getLoggedUserType(){
    return this.type_user;
  }
  logOut(){
    this.log_status = false;
    this.userid = "";
    this.type_user = "";
  }
}

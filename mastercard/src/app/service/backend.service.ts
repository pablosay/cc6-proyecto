import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAdminList } from '../models/UserAdminList';
import { UserClientList } from '../models/UserClientList';
const BE_API = environment.urlBackEnd;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http:HttpClient) { }
  tryLogInAdmin(nombre:string, pw: string){
    let url:string = BE_API + "/ingresar/admin/nombre/"+nombre+"/password/"+pw;
    return this.http.get<UserAdminList>(url,httpOptions);
  }
  tryLogInUser(nombre:string, pw:string){
    let url:string = BE_API + "/ingresar/cliente/nombre/"+nombre+"/password/"+pw;
    return this.http.get<UserClientList>(url, httpOptions);
  }
}

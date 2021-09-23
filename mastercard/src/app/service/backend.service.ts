import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAdminList } from '../models/UserAdminList';
import { UserClientList } from '../models/UserClientList';
import { GuardarTarjeta } from '../models/GuardarTarjeta';
import { SaveResponse } from '../models/SaveResponse';
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
  trySaveCreditCard(numero:number, nombre_titular: string, fecha_vencimiento:string, ccv: number, monto_autorizado: number, monto_disponible: number, usuario:number, admin_id: number){
    let url:string = BE_API+ "/pagadmin/emitirtarjetas";
    let guardartarjeta: GuardarTarjeta = new GuardarTarjeta(numero, nombre_titular, fecha_vencimiento, ccv,monto_autorizado, monto_disponible, usuario, admin_id);
    return this.http.post<SaveResponse>(url,guardartarjeta,httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAdminList } from '../models/UserAdminList';
import { UserClientList } from '../models/UserClientList';
import { GuardarTarjeta } from '../models/GuardarTarjeta';
import { SaveResponse } from '../models/SaveResponse';
import { ListaTiendas } from '../models/ListaTiendas';
import { TiendaIpList } from '../models/TiendaIpList';
import { UserClient } from '../models/UserClient';
import { ListaTarjetas } from '../models/ListaTarjetas';
import { ListaNumero } from '../models/ListaNumero';
import { ListaMonto } from '../models/ListaMonto';
import { GuardarPago } from '../models/GuardarPago';
import { ListaConsumos } from '../models/ListaConsumos';
import { ListaPagos } from '../models/ListaPagos';
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
  trySaveCreditCard(numero:number, nombre_titular: string, fecha_vencimiento:string, ccv: number, monto_autorizado: number, monto_disponible: number, nombre_usuario:string, nombre_admin: string){
    let url:string = BE_API+ "/pagadmin/emitirtarjeta";
    let guardartarjeta: GuardarTarjeta = new GuardarTarjeta(numero, nombre_titular, fecha_vencimiento, ccv,monto_autorizado, monto_disponible, nombre_usuario, nombre_admin);
    return this.http.post<SaveResponse>(url,guardartarjeta,httpOptions);
  }
  tryGetTarjetas(nombre:string){
    let url:string = BE_API + "/pagusuario/tarjetas/"+nombre;
    return this.http.get<ListaTarjetas>(url, httpOptions);
  }
  tryGetNumeroTarjetas(nombre:string){
    let url:string = BE_API + "/pagusuario/tarjetas/numeros/"+nombre;
    return this.http.get<ListaNumero>(url, httpOptions);
  }
  tryGetMontoAut(numero:number){
    let url:string = BE_API + "/pagusuario/tarjetas/"+numero+"/montoautorizado";
    return this.http.get<ListaMonto>(url, httpOptions);
  }
  tryUpdateTarjeta(numero:number, monto:number){
    let url: string = BE_API + "/pagusuario/pagartarjetas/updatetarjeta/numero/"+numero+"/monto/"+monto;
    return this.http.put<ListaTarjetas>(url, httpOptions);
  }
  tryInsertPago(monto_pago: number, fecha_pago: string, no_tarjeta:number){
    let url: string = BE_API + "/pagusuario/pagartarjetas";
    let newpago: GuardarPago = new GuardarPago(monto_pago, fecha_pago, no_tarjeta);
    return this.http.post<SaveResponse>(url,newpago, httpOptions);
  }
  trySaveClient(nombre:string, pw: string){
    let url:string = BE_API+ "/pagadmin/ingresarcliente";
    let newuser: UserClient = new UserClient(nombre, pw);
    return this.http.post<SaveResponse>(url,newuser, httpOptions);
  }
  tryGetStores(){
    let url: string = BE_API + "/pagadmin/tiendas";
    return this.http.get<ListaTiendas>(url, httpOptions);
  }
  tryUpdateStore(nombre:string, ip: string){
    let url: string = BE_API + "/pagadmin/tiendas/tienda/"+nombre+ "/ip/"+ip;
    return this.http.put<TiendaIpList>(url, httpOptions);
  }
  tryGetConsumos(numero:number){
    let url: string = BE_API + "/pagusuario/historial/consumos/numero/"+numero;
    return this.http.get<ListaConsumos>(url, httpOptions);
  }
  tryGetPagos(numero:number){
    let url: string = BE_API + "/pagusuario/historial/pagos/numero/"+numero;
    return this.http.get<ListaPagos>(url, httpOptions);
  }
}

import { TiendaIp } from "./TiendaIp";
export class TiendaIpList{
    status: number;
    mensaje:string;
    tiendas: TiendaIp[];
    constructor(status:number,mensaje:string,nombres:TiendaIp[]){
        this.status = status;
        this.mensaje = mensaje;
        this.tiendas = nombres;
    }
}
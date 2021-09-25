import { MontoAut } from "./MontoAut";
export class ListaMonto{
    status: number;
    mensaje:string;
    montos: MontoAut[];
    constructor(status:number,mensaje:string,montos:MontoAut[]){
        this.status = status;
        this.mensaje = mensaje;
        this.montos = montos;
    }
}
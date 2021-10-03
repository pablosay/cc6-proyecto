import { Tarjeta } from "./Tarjeta";
export class ListaTarjetas{
    status: number;
    mensaje:string;
    tarjetas: Tarjeta[];
    constructor(status: number, mensaje: string, tarjetas:Tarjeta[]){
        this.status = status;
        this.mensaje = mensaje;
        this.tarjetas = tarjetas;
    }
}
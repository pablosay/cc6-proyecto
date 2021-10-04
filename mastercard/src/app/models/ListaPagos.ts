import { Pagos } from "./Pagos";
export class ListaPagos{
    status: number;
    mensaje:string;
    pagos: Pagos[];
    constructor(status: number, mensaje:string, pagos: Pagos[]){
        this.status = status;
        this.mensaje = mensaje;
        this.pagos = pagos;
    }
}
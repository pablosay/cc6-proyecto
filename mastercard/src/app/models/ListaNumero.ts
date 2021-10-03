import { NumeroTarjeta } from "./NumeroTarjeta";
export class ListaNumero{
    status: number;
    mensaje:string;
    numeros: NumeroTarjeta[];
    constructor(status:number,mensaje:string,numeros:NumeroTarjeta[]){
        this.status = status;
        this.mensaje = mensaje;
        this.numeros = numeros;
    }
}
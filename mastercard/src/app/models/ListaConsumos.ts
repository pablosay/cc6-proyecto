import { Consumos } from "./Consumos";
export class ListaConsumos{
    status: number;
    mensaje:string;
    consumos: Consumos[];
    constructor(status: number, mensaje:string, consumos: Consumos[]){
        this.status = status;
        this.mensaje = mensaje;
        this.consumos = consumos;
    }
}
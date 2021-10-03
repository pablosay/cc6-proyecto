import { Tienda } from "./Tienda";
export class ListaTiendas{
    status: number;
    mensaje:string;
    tiendas: Tienda[];
    constructor(status:number,mensaje:string,tiendas:Tienda[]){
        this.status = status;
        this.mensaje = mensaje;
        this.tiendas = tiendas;
    }
}
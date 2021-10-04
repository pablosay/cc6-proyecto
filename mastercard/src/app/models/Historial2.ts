import { Consumos } from "./Consumos";
import { Pagos } from "./Pagos";
export class Historial2{
    consumos: Consumos[];
    pagos: Pagos[];
    numero: number;
    constructor(consumos: Consumos[], pagos: Pagos[], numero: number){
        this.consumos = consumos;
        this.pagos = pagos;
        this.numero = numero;
    }
}
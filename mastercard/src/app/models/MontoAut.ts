export class MontoAut{
    monto_autorizado: number;
    monto_disponible: number;
    constructor(monto_autorizado:number, monto_disponible: number){
        this.monto_autorizado = monto_autorizado;
        this.monto_disponible = monto_disponible;
    }
}
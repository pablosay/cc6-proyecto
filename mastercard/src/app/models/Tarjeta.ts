export class Tarjeta{
    //numero, nombre_titular, fecha_vencimiento, ccv, monto_autorizado, monto_disponible
    numero: number;
    nombre_titular: string;
    fecha_vencimiento: string;
    ccv: number;
    monto_autorizado: number;
    monto_disponible: number;
    constructor(numero: number, nombre_titular: string, fecha_vencimiento: string, ccv: number, monto_autorizado: number, monto_disponible: number){
        this.numero = numero;
        this.nombre_titular= nombre_titular;
        this.fecha_vencimiento = fecha_vencimiento.substring(0,7);
        this.ccv = ccv;
        this.monto_autorizado = monto_autorizado;
        this.monto_disponible = monto_disponible;
    }
}
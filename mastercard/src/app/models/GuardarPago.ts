export class GuardarPago{
    monto_pago: number;
    fecha_pago: string;
    no_tarjeta: number;
    constructor(monto_pago: number, fecha_pago: string, no_tarjeta:number){
        this.monto_pago = monto_pago;
        this.fecha_pago = fecha_pago;
        this.no_tarjeta = no_tarjeta;
    }
}
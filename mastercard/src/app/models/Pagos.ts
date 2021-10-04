export class Pagos{
    numero_pago: number;
    monto_pago:number;
    fecha_pago:string;
    constructor(numero_pago: number, monto_pago:number, fecha_pago:string){
    this.numero_pago = numero_pago;
    this.monto_pago = monto_pago;
    this.fecha_pago = fecha_pago;
    }
}
export class GuardarTarjeta{
    numero:number;
    nombre_titular: string;
    fecha_vencimiento:string;
    ccv: number;
    monto_autorizado: number;
    monto_disponible: number;
    usuario:number;
    admin_id: number;
    constructor(numero:number, nombre_titular: string, fecha_vencimiento:string, ccv: number, monto_autorizado: number, monto_disponible: number, usuario:number, admin_id: number){
        this.numero = numero;
        this.nombre_titular = nombre_titular;
        this.fecha_vencimiento = fecha_vencimiento;
        this.ccv = ccv;
        this.monto_autorizado = monto_disponible;
        this.monto_disponible = monto_disponible;
        this.usuario = usuario;
        this.admin_id = admin_id;
    }
}
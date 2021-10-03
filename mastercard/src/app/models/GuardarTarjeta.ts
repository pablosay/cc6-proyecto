export class GuardarTarjeta{
    numero:number;
    nombre_titular: string;
    fecha_vencimiento:string;
    ccv: number;
    monto_autorizado: number;
    monto_disponible: number;
    nombre_usuario:string;
    nombre_admin: string;
    constructor(numero:number, nombre_titular: string, fecha_vencimiento:string, ccv: number, monto_autorizado: number, monto_disponible: number, nombre_usuario:string, nombre_admin: string){
        this.numero = numero;
        this.nombre_titular = nombre_titular;
        this.fecha_vencimiento = fecha_vencimiento;
        this.ccv = ccv;
        this.monto_autorizado = monto_disponible;
        this.monto_disponible = monto_disponible;
        this.nombre_usuario = nombre_usuario;
        this.nombre_admin = nombre_admin;
    }
}
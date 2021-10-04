export class Consumos{
    numero_consumo: number;
    monto_consumo:number;
    fecha_consumo:string;
    nombre_tienda: string;
    constructor(numero_consumo: number, monto_consumo:number, fecha_consumo:string, nombre_tienda: string){
    this.numero_consumo = numero_consumo;
    this.monto_consumo = monto_consumo;
    this.fecha_consumo = fecha_consumo;
    this.nombre_tienda = nombre_tienda;
    }
}
import { UserClient } from "./UserClient";
export class UserClientList{
    status: number;
    mensaje:string;
    nombres: Array<UserClient>;
    constructor(status:number,mensaje:string,nombres:Array<UserClient>){
        this.status = status;
        this.mensaje = mensaje;
        this.nombres = nombres;
    }
}
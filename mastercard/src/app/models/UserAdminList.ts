import { UserAdmin } from "./UserAdmin";
export class UserAdminList{
    status: number;
    mensaje:string;
    nombres: Array<UserAdmin>;
    constructor(status:number,mensaje:string,nombres:Array<UserAdmin>){
        this.status = status;
        this.mensaje = mensaje;
        this.nombres = nombres;
    }
}
import { UserAdmin } from "./UserAdmin";
export class UserAdminList{
    status: number;
    mensaje:string;
    nombres: UserAdmin[];
    constructor(status:number,mensaje:string,nombres:UserAdmin[]){
        this.status = status;
        this.mensaje = mensaje;
        this.nombres = nombres;
    }

}
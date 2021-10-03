import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { UserAdmin } from '../models/UserAdmin';
import { BackendService } from '../service/backend.service';
import { UsuarioActualService } from '../service/usuario-actual.service';
import { UserClient } from '../models/UserClient';
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {
  form_inicio_sesion: FormGroup;
  usuarios_admin: UserAdmin[];
  usuarios_cliente: UserClient[];
  constructor(private router:Router, private fb: FormBuilder,private backend: BackendService, private datosingreso: UsuarioActualService) {
    this.usuarios_admin = []; 
    this.usuarios_cliente = [];
    this.form_inicio_sesion = this.fb.group({
      nombre: [''],
      pw: [''],
      tipo_usuario:""
    });
  }
  ngOnInit(): void {
  }

  goTo(){
    if(this.form_inicio_sesion.controls['tipo_usuario'].value == "admin"){
      this.backend.tryLogInAdmin(this.form_inicio_sesion.controls['nombre'].value
      ,this.form_inicio_sesion.controls['pw'].value).subscribe(x=> {
        this.usuarios_admin = x.nombres;
        //No obtuvo coincidencias
        if(this.usuarios_admin.length==0){
          alert("Nombre o contrasena incorrecta");
          this.usuarios_admin = [];
          this.router.navigateByUrl("");
        } else {
          //Encontro el usuario y password
          this.datosingreso.loggedIn();
          alert(this.usuarios_admin[0].nombre);
          this.datosingreso.loggedUser("admin", this.usuarios_admin[0].nombre);
          this.usuarios_admin = []; 
          this.router.navigateByUrl("pagadmin");
        }
      }
      );
    } else if(this.form_inicio_sesion.controls['tipo_usuario'].value == "cliente"){
      this.backend.tryLogInUser(this.form_inicio_sesion.controls['nombre'].value,this.form_inicio_sesion.controls['pw'].value).subscribe(x=> {
        this.usuarios_cliente = x.nombres;
        if(this.usuarios_cliente.length==0){
          alert("Nombre o contrasena incorrecta");
          this.usuarios_cliente = [];
          this.router.navigateByUrl("");
        } else {
          this.datosingreso.loggedIn();
          alert(this.usuarios_cliente[0].nombre);
          this.datosingreso.loggedUser("cliente", this.usuarios_cliente[0].nombre);
          this.usuarios_cliente = [];
          this.router.navigateByUrl("pagusuario");
        }
      });      
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioActualService } from '../service/usuario-actual.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(private router:Router, private datosingreso: UsuarioActualService) {
  }
  ngOnInit(): void { }

  navegar(ruta:string){
    if(this.datosingreso.getLoginStatus()== true && ruta=="ingresar"){
      alert("Ya inicio sesion");
    } else {
      this.router.navigateByUrl('/'+ruta);
    }
  }
  //Si se cierra sesion
  logOut(){
    //Volver a mostrar la funcion
    if(this.datosingreso.getLoginStatus()== false){
      alert("Debe iniciar sesion primero");
    } else {
      alert("Se cerro sesion");
      this.datosingreso.logOut();
      this.router.navigateByUrl("");
    }
  }
}

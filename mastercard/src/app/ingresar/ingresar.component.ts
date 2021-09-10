import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irPaginaPrincipal(ruta:string){
    this.router.navigateByUrl(ruta);
  }

}

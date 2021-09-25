import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { UsuarioActualService } from 'src/app/service/usuario-actual.service';
import { Tarjeta } from 'src/app/models/Tarjeta';
@Component({
  selector: 'app-ver-tarjetas',
  templateUrl: './ver-tarjetas.component.html',
  styleUrls: ['./ver-tarjetas.component.scss']
})
export class VerTarjetasComponent implements OnInit {
  tarjetas: Tarjeta[];
  constructor(private backend: BackendService, private userdata: UsuarioActualService) {
    this.tarjetas = [];
  }

  ngOnInit(): void {
    this.backend.tryGetTarjetas(this.userdata.getLoggedUser()).subscribe(
      response => {
        for(let tarjeta of response.tarjetas){
          tarjeta.fecha_vencimiento = tarjeta.fecha_vencimiento.substring(0,7);
        }
        this.tarjetas = response.tarjetas;
      }
    )
  }

}

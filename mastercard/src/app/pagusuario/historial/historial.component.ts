import { Component, OnInit } from '@angular/core';
import { Historial2 } from 'src/app/models/Historial2';
import { NumeroTarjeta } from 'src/app/models/NumeroTarjeta';
import { BackendService } from 'src/app/service/backend.service';
import { UsuarioActualService } from 'src/app/service/usuario-actual.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  ListaHistoriales: Historial2[];
  tarjetas: NumeroTarjeta[];
  constructor(private backend: BackendService, private usuario: UsuarioActualService) {
    this.tarjetas = [];
    this.ListaHistoriales = [];
  }
  ngOnInit(): void {
    this.backend.tryGetNumeroTarjetas(this.usuario.getLoggedUser()).subscribe(data => {
      this.tarjetas = data.numeros;
      for(let numerotarjeta of this.tarjetas){
        this.backend.tryGetConsumos(numerotarjeta.numero).subscribe(data_consumos => {
          this.backend.tryGetPagos(numerotarjeta.numero).subscribe(data_pagos => {
            this.ListaHistoriales.push(new Historial2(data_consumos.consumos, data_pagos.pagos, numerotarjeta.numero));
          });
        });
      }
    });
  }
}


/**
 * this.backend.tryGetConsumos(Number(tarjeta.numero)).subscribe(data => {
          console.log(data.consumos);
          this.consumos = data.consumos;
        });
 */
/**
 * this.backend.tryGetPagos(Number(tarjeta.numero)).subscribe(data => {
          console.log(data.pagos);
          this.pagos = data.pagos;
        });
 */
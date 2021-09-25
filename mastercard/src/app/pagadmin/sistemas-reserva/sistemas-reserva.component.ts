import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tienda } from 'src/app/models/Tienda';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-sistemas-reserva',
  templateUrl: './sistemas-reserva.component.html',
  styleUrls: ['./sistemas-reserva.component.scss']
})
export class SistemasReservaComponent implements OnInit {
  tiendas: Tienda[];
  form: FormGroup;
  constructor(private backend: BackendService, private fb:FormBuilder) {
    this.tiendas = [];
    this.form = this.fb.group({
      nombre: [''],
      ip: ['']
    });
  }
  ngOnInit(): void {
    this.backend.tryGetStores().subscribe(listiend => {
      this.tiendas = listiend.tiendas;
    });
  }
  cambiarIp(){
    alert(this.form.controls['nombre'].value);
    alert(this.form.controls['ip'].value);
    this.backend.tryUpdateStore(this.form.controls['nombre'].value, this.form.controls['ip'].value).subscribe(response =>{
      if(response.status == 1){
        alert(response.mensaje)
        alert("Actualizado correctamente");
        this.form = this.fb.group({
          nombre: ['Sistema de reserva'],
          ip: ['']
        });
      }
    })
  }
}

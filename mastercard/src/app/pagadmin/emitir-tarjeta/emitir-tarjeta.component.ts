import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/service/backend.service';
import { UsuarioActualService } from 'src/app/service/usuario-actual.service';

@Component({
  selector: 'app-emitir-tarjeta',
  templateUrl: './emitir-tarjeta.component.html',
  styleUrls: ['./emitir-tarjeta.component.scss']
})
export class EmitirTarjetaComponent implements OnInit {
  form:FormGroup;
  constructor(private fb: FormBuilder, private backend: BackendService, private usuarioadmin: UsuarioActualService) {
    this.form = this.fb.group({
      numero: [''],
      mes: ['Mes'],
      year: ['Año'],
      nombre_tarjeta: [''],
      CCV: [''],
      id_usuario: [''],
      monto_autorizado: []
    })
  }

  ngOnInit(): void {
  }
  submit(){
    if(!(this.form.controls['numero'].value ==="" || this.form.controls['nombre_tarjeta'].value ==="" ||
    this.form.controls['year'].value === "" || this.form.controls['mes'].value === "" || 
    this.form.controls['CCV'].value == '' || this.form.controls['monto_autorizado'].value == '' || 
    this.form.controls['monto_autorizado'].value == '' ||  this.form.controls['id_usuario'].value == '')){
      
      this.backend.trySaveCreditCard(this.form.controls['numero'].value, this.form.controls['nombre_tarjeta'].value,
      this.form.controls['year'].value + this.form.controls['mes'].value+"01", this.form.controls['CCV'].value,
      this.form.controls['monto_autorizado'].value, this.form.controls['monto_autorizado'].value, this.form.controls['id_usuario'].value,
      this.usuarioadmin.getLoggedUser()).subscribe( x => {
        if(x.status == 1){
          alert('Ingreso de tarjeta correcto');
          this.form = this.fb.group({
            numero: [''],
            mes: ['Mes'],
            year: ['Año'],
            nombre_tarjeta: [''],
            CCV: [''],
            id_usuario: [''],
            monto_autorizado: []
          })
        } else {
          alert('Ingreso mal algun dato');
        }
      });
    }
  }
}

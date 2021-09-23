import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emitir-tarjeta',
  templateUrl: './emitir-tarjeta.component.html',
  styleUrls: ['./emitir-tarjeta.component.scss']
})
export class EmitirTarjetaComponent implements OnInit {
  form:FormGroup;
  constructor(private fb: FormBuilder) {
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
    
  }
}

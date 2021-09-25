import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NumeroTarjeta } from 'src/app/models/NumeroTarjeta';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-pagartarjeta',
  templateUrl: './pagartarjeta.component.html',
  styleUrls: ['./pagartarjeta.component.scss']
})
export class PagartarjetaComponent implements OnInit {
  form: FormGroup;
  constructor(private backend: BackendService, private fb:FormBuilder) {
    this.form = this.fb.group({
      numero: [],
      monto_pago: [] 
    })
  }
  ngOnInit(): void {
  }
  getNumeros(){
    
  }
  pagar(){
    alert(this.form.controls['numero'].value);
    let today = new Date().toISOString().slice(0, 10);
    let monto_autorizado:number = 0;
    let monto_disponible: number = 0;
    console.log(this.form.controls['numero'].value);
    this.backend.tryGetMontoAut(this.form.controls['numero'].value).subscribe(response => {
      monto_autorizado = response.montos[0].monto_autorizado;
      monto_disponible = response.montos[0].monto_disponible;
      let a:number = +Number(monto_disponible) + +Number(this.form.controls['monto_pago'].value);
      alert(a);
      if((this.form.controls['monto_pago'].value>(monto_autorizado)) || a > monto_autorizado){
        alert("El pago excede el limite");
      } else if(((this.form.controls['monto_pago'].value) == 0)){
        alert ("Ingrese un valor correcto");
      } else {
        //update tarjeta
        this.backend.tryUpdateTarjeta(this.form.controls['numero'].value, this.form.controls['monto_pago'].value).subscribe(response => {
          if(response.status == 1){
            alert("Se actualizaron los datos de su tarjeta");
            this.form = this.fb.group({
              numero: [''],
              monto_pago: 0
            })
          } else {
            alert ("Algo fallo");
          }
        });
        //Ingresar a pagos
        this.backend.tryInsertPago(this.form.controls['monto_pago'].value, today, this.form.controls['numero'].value).subscribe(response => {
          if(response.status == 1){
            alert("Se ingreso correctamente el pago");
            this.form = this.fb.group({
              numero: [''],
              monto_pago: 0
            })
          } else {
            alert ("Algo fallo");
          }
        });
      }
    });
  }



}

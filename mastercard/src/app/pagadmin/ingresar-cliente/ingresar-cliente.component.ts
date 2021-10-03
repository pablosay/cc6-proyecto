import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/service/backend.service';
@Component({
  selector: 'app-ingresar-cliente',
  templateUrl: './ingresar-cliente.component.html',
  styleUrls: ['./ingresar-cliente.component.scss']
})
export class IngresarClienteComponent implements OnInit {
  form: FormGroup;
  constructor(private backend: BackendService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [''],
      pw: [''],
      pwc: ['']
    })
  }
  ngOnInit(): void {
  }
  ingresarCliente(){
    if(!((this.form.controls['nombre'].value === "") || (this.form.controls['pw'].value === "") || (this.form.controls['pwc'].value === ""))){
      if(this.form.controls['pw'].value === this.form.controls['pwc'].value){
        this.backend.trySaveClient(this.form.controls['nombre'].value, this.form.controls['pw'].value).subscribe(response => {
          if(response.status == 1){
            alert("Se ingreso correctamente");
            this.form = this.fb.group({
              nombre: [''],
              pw: [''],
              pwc: ['']
            })
          }
        });
      } else {
        alert("Las cotraseñas no son iguales")
      }
    } else {
      alert('Llene todo el formulario');
    }
  }
}

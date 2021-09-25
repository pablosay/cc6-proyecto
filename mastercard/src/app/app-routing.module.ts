import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { PaginaAdminComponent } from './pagina-admin/pagina-admin.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { IngresarClienteComponent } from './pagadmin/ingresar-cliente/ingresar-cliente.component';
import { EmitirTarjetaComponent } from './pagadmin/emitir-tarjeta/emitir-tarjeta.component';
import { VerTarjetasComponent } from './pagusuario/ver-tarjetas/ver-tarjetas.component';
import { SistemasReservaComponent } from './pagadmin/sistemas-reserva/sistemas-reserva.component';
import { MenuComponent } from './menu/menu.component';
import { HistorialComponent } from './pagusuario/historial/historial.component';
import { PagartarjetaComponent } from './pagusuario/pagartarjeta/pagartarjeta.component';
const routes: Routes = [
  {path: 'menucomponent', component: MenuComponent},
  {
    path: '', pathMatch: 'full', redirectTo: ''
  },
  {path: 'ingresar', component: IngresarComponent},
  {path: 'pagusuario', component: PaginaUsuarioComponent,
    children: [
      {path: 'vertarjetas', component:VerTarjetasComponent},
      {path: 'pagartarjetas', component:PagartarjetaComponent},
      {path: 'historial', component:HistorialComponent}
    ]
  },
  {path: 'pagadmin', component: PaginaAdminComponent,
    children: [
      {path: 'ingresarcliente', component:IngresarClienteComponent},
      {path: 'emitirtarjeta', component:EmitirTarjetaComponent},
      {path: 'sistemasreserva', component:SistemasReservaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

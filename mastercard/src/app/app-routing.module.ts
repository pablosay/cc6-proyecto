import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { PaginaAdminComponent } from './pagina-admin/pagina-admin.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { IngresarClienteComponent } from './pagadmin/ingresar-cliente/ingresar-cliente.component';
import { EmitirTarjetaComponent } from './pagadmin/emitir-tarjeta/emitir-tarjeta.component';
import { VerClientesComponent } from './pagadmin/ver-clientes/ver-clientes.component';
import { VerPerfilComponent } from './pagusuario/ver-perfil/ver-perfil.component';
import { VerTarjetasComponent } from './pagusuario/ver-tarjetas/ver-tarjetas.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  {path: 'menucomponent', component: MenuComponent},
  {
    path: '', pathMatch: 'full', redirectTo: ''
  },
  {path: 'ingresar', component: IngresarComponent},
  {path: 'pagusuario', component: PaginaUsuarioComponent,
    children: [
      {path: 'verperfil', component:VerPerfilComponent},
      {path: 'vertarjetas', component:VerTarjetasComponent}
    ]
  },
  {path: 'pagadmin', component: PaginaAdminComponent,
    children: [
      {path: 'ingresarcliente', component:IngresarClienteComponent},
      {path: 'emitirtarjeta', component:EmitirTarjetaComponent},
      {path: 'verclientes', component:VerClientesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

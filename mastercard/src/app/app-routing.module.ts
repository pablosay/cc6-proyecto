import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { PaginaAdminComponent } from './pagina-admin/pagina-admin.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { RegistrarComponent } from './registrar/registrar.component';
const routes: Routes = [
  {path: 'ingresar', component: IngresarComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'pagusuario', component: PaginaUsuarioComponent},
  {path: 'pagadmin', component: PaginaAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

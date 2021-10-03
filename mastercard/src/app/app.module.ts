import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { IngresarComponent } from './ingresar/ingresar.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { PaginaAdminComponent } from './pagina-admin/pagina-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmitirTarjetaComponent } from './pagadmin/emitir-tarjeta/emitir-tarjeta.component';
import { MatMenuModule} from '@angular/material/menu';
import { IngresarClienteComponent } from './pagadmin/ingresar-cliente/ingresar-cliente.component';
import { VerTarjetasComponent } from './pagusuario/ver-tarjetas/ver-tarjetas.component';
import { SistemasReservaComponent } from './pagadmin/sistemas-reserva/sistemas-reserva.component';
import { PagartarjetaComponent } from './pagusuario/pagartarjeta/pagartarjeta.component';
import { HistorialComponent } from './pagusuario/historial/historial.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IngresarComponent,
    PaginaUsuarioComponent,
    PaginaAdminComponent,
    EmitirTarjetaComponent,
    IngresarClienteComponent,
    VerTarjetasComponent,
    SistemasReservaComponent,
    PagartarjetaComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

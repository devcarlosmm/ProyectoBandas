import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetallesGrupoComponent } from './components/detalles-grupo/detalles-grupo.component';
import { FormularioNuevaBandaComponent } from './components/formulario-nueva-banda/formulario-nueva-banda.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

// Servicios
import { ApiService } from './services/api.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    DetallesGrupoComponent,
    FormularioNuevaBandaComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

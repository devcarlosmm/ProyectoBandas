import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetallesGrupoComponent } from './components/detalles-grupo/detalles-grupo.component';
import { FormularioNuevaBandaComponent } from './components/formulario-nueva-banda/formulario-nueva-banda.component';

const routes: Routes = [
    {path:'', component:InicioComponent, pathMatch: 'full'},
    {path:'detalles/:id', component:DetallesGrupoComponent},
    {path:'formulario-nueva-banda', component:FormularioNuevaBandaComponent},
    {path:'formulario-editar-banda/:id', component:FormularioNuevaBandaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

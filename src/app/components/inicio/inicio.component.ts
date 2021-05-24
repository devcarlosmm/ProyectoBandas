import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Banda } from '../../models/banda';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
    bandas:Banda[];
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
      this.getBandas();
  }

// Recuperar todas las bandas
  getBandas():void{
      this.apiService.getBandas().subscribe(bandas => this.bandas = bandas);
  }


// Eliminar bandas
  eliminarBanda(idBanda:number,nombre_banda:string):void{
    const borrarBanda = confirm(`Estas seguro de querer borrar a ${nombre_banda}` );
    if(borrarBanda){
         this.apiService.deleteBanda(idBanda).subscribe(()=>{
             this.getBandas();
         });
    }
  }
}

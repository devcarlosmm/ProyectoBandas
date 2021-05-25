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
      this.apiService.getBandas().subscribe(bandas => {
          this.bandas = bandas
          console.log(this.bandas);
          this.cortarHistoria(this.bandas);
        });
  }


// Eliminar bandas
  eliminarBanda(idBanda:number,nombre_banda:string):void{
    const borrarBanda = confirm(`Estas seguro de querer borrar a '${nombre_banda}'` );
    if(borrarBanda){
         this.apiService.deleteBanda(idBanda).subscribe(()=>{
             this.getBandas();
         });
    }
  }

  //Funcion leer mas
  leerMas(parametro){
      let h=parametro
      let primeraParte = document.getElementById(parametro).children
      let span=document.getElementById(parametro).children
    console.log(span[0])
    if(span[1].classList.contains("dNone")){
        span[0].classList.remove("dLine");
        span[0].classList.add("dNone");
        span[1].classList.remove("dNone");
        span[1].classList.add("dLine");
    }else{
        span[0].classList.remove("dNone");
        span[0].classList.add("dLine");
        span[1].classList.remove("dLine");
        span[1].classList.add("dNone");
    }


  }

  cortarHistoria(pBandas){
      let nHistorias=pBandas.length;

      for (let i= 0; i < nHistorias; i++) {
          let primeraHistoria=pBandas[i].historia.substring(0,300);
          let segundaHistoria=pBandas[i].historia.substring(300,pBandas[i].historia.length);
          pBandas[i].p1Historia= primeraHistoria;
          pBandas[i].p2Historia= segundaHistoria;
      }
  }
}

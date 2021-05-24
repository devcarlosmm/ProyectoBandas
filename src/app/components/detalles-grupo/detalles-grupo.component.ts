import { Component, OnInit } from '@angular/core';
import { Banda } from '../../models/banda';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-detalles-grupo',
  templateUrl: './detalles-grupo.component.html',
  styleUrls: ['./detalles-grupo.component.scss']
})
export class DetallesGrupoComponent implements OnInit {
    detalleBanda:Banda;
    idDetallesBanda:number;
    urlSafe: SafeResourceUrl;
    urlBase:string;
  constructor(private apiService:ApiService, private activatedRouter:ActivatedRoute, public sanitizer:DomSanitizer) {
    this.urlBase="https://www.youtube.com/embed/";
   }

  ngOnInit(): void {
    this.detalleBanda = new Banda();
    this.activatedRouter.params.subscribe(params=>{
        this.idDetallesBanda= params.id;
    });

    this.recuperarDetalles(this.idDetallesBanda);      
    console.log("Detalle",this.detalleBanda)
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Df5cZTaEfKc');
    console.log("URL",this.urlSafe)
  }

recuperarDetalles(pId):void{
    this.apiService.detalleBanda(pId).subscribe(data => {
        this.detalleBanda = data[0];

        // Cosa
        console.log("web: ", this.detalleBanda.urlVideo)
        let video= this.detalleBanda.urlVideo.split('/')
        /* https://youtu.be/svCYbIhGVJM*/
        console.log("web cortada: ", video[3])
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlBase+video[3]);
        // Fin de cosa

        console.log("Datos: ",data)
       
    },error => console.log(error));
}
}

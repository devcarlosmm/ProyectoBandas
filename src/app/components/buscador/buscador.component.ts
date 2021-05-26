import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Banda } from '../../models/banda';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {
  bandas: Banda[];
  nombre: string = '';
  buscando: boolean = false;
  datosEncontrados: boolean = false;
  cadena: string = ';';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
  recogerNombre(nombre) {
    return nombre;
  }
  // Buscar Bandas
  searchBandas(nombre: string) {
    this.cadena = nombre;
    if (nombre.length >= 2) {
      this.buscando = true;
      setTimeout(() => {
        this.apiService.searchBanda(nombre).subscribe((bandas) => {
          this.bandas = bandas;
          this.buscando = false;
          if (bandas.length != 0) {
            this.datosEncontrados = true;
          }
        });
      }, 1000);
    } else {
      this.bandas = [];
      this.datosEncontrados = false;
      this.buscando = false;
    }
  }
  sinFoco() {
    this.datosEncontrados = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Banda } from 'src/app/models/banda';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-formulario-nueva-banda',
  templateUrl: './formulario-nueva-banda.component.html',
  styleUrls: ['./formulario-nueva-banda.component.scss'],
})
export class FormularioNuevaBandaComponent implements OnInit {
  formulario: FormGroup;
  urlRegEx = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  maxCaracter: number;
  idBanda: number;
  banda: Banda;
  tenemosBanda: boolean;

  constructor(
    private apiService: ApiService,
    private router: Router,
    public activatedRouter: ActivatedRoute
  ) {
    this.tenemosBanda = false;

    this.formulario = new FormGroup({
      idbanda: new FormControl(''),
      nombre_banda: new FormControl('', [
        Validators.minLength(2),
        Validators.required,
      ]),
      genero: new FormControl('', [Validators.required]),
      historia: new FormControl('', [
        Validators.maxLength(this.maxCaracter),
        Validators.required,
      ]),
      urlVideo: new FormControl('', [Validators.required]),
      urlWeb: new FormControl('', [
        Validators.pattern(this.urlRegEx),
        Validators.required,
      ]),
      urlSpotify: new FormControl('', [
        Validators.pattern(this.urlRegEx),
        Validators.required,
      ]),
    });

    this.maxCaracter = 5000;
  }

  enviar() {
    if (this.idBanda) {
      console.log(this.formulario.value);
      this.apiService.updateBanda(this.formulario.value).subscribe();
      this.router.navigateByUrl('/');
    } else {
      console.log('no id, creamos banda');
      this.apiService.createBanda(this.formulario.value).subscribe();
      this.router.navigateByUrl('/');
    }
  }

  // Getters
  get f() {
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.banda = new Banda();

    this.activatedRouter.params.subscribe((params) => {
      this.idBanda = params.id;
      if (this.idBanda) {
        this.recuperarDetallesBanda(this.idBanda);
        this.tenemosBanda = true;
      } else {
        /*       var boton = <HTMLInputElement>document.getElementById('botonDisabled');
            boton.disabled = true;
            var select = <HTMLInputElement>document.getElementById('selector');
            select.value = '0';
            console.log('Value = ', select.value); */
      }
    });
  }
  recuperarDetallesBanda(pId: number) {
    this.apiService.detalleBanda(pId).subscribe(
      (data) => {
        this.setearValue(data[0]);
        this.f.genero.setValue(data[0].genero);
        return this.formulario;
      },
      (error) => console.log(error)
    );
  }

  setearValue(data) {
    this.formulario.patchValue({
      idbanda: data.idbanda,
      nombre_banda: data.nombre_banda,
      genero: data.genero,
      historia: data.historia,
      urlVideo: data.urlVideo,
      urlWeb: data.urlWeb,
      urlSpotify: data.urlSpotify,
    });
  }
}

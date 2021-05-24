import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-formulario-nueva-banda',
  templateUrl: './formulario-nueva-banda.component.html',
  styleUrls: ['./formulario-nueva-banda.component.scss']
})
export class FormularioNuevaBandaComponent implements OnInit {

  formulario : FormGroup;
  urlRegEx ='(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  maxCaracter:number;

  constructor(private apiService:ApiService,private router: Router) { 
      this.maxCaracter=5000;
    this.formulario = new FormGroup({
        nombre_banda: new FormControl('', [Validators.minLength(2),Validators.required]),
        genero: new FormControl('', [Validators.required]),
        historia: new FormControl('',[Validators.maxLength(this.maxCaracter),Validators.required]),
        urlVideo: new FormControl('',[Validators.required]),
        urlWeb: new FormControl('',[Validators.pattern(this.urlRegEx),Validators.required]),
        urlSpotify: new FormControl('',[Validators.pattern(this.urlRegEx),Validators.required])
    })
    console.log(this.formulario.controls.historia.errors.maxLength)
  }

  enviar(){
    console.log(this.formulario.value);

    this.apiService.createBanda(this.formulario.value).subscribe();
    this.router.navigateByUrl('/');
  }
  // Getters
  get genero() { return this.formulario.get('genero') };
  get urlWeb() { return this.formulario.get('urlWeb') };
  get urlSpotify() { return this.formulario.get('urlSpotify') };

  ngOnInit(): void {
  }

}

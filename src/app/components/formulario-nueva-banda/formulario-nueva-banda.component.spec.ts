import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevaBandaComponent } from './formulario-nueva-banda.component';

describe('FormularioNuevaBandaComponent', () => {
  let component: FormularioNuevaBandaComponent;
  let fixture: ComponentFixture<FormularioNuevaBandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioNuevaBandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevaBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

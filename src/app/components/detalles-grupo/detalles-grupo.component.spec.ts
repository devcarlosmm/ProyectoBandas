import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesGrupoComponent } from './detalles-grupo.component';

describe('DetallesGrupoComponent', () => {
  let component: DetallesGrupoComponent;
  let fixture: ComponentFixture<DetallesGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

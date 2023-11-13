import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoAleatorioComponent } from './codigo-aleatorio.component';

describe('CodigoAleatorioComponent', () => {
  let component: CodigoAleatorioComponent;
  let fixture: ComponentFixture<CodigoAleatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoAleatorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoAleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoPequenaComponent } from './secao-pequena.component';

describe('SecaoPequenaComponent', () => {
  let component: SecaoPequenaComponent;
  let fixture: ComponentFixture<SecaoPequenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecaoPequenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoPequenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

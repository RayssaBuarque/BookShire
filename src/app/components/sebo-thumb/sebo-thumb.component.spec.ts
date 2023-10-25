import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeboThumbComponent } from './sebo-thumb.component';

describe('SeboThumbComponent', () => {
  let component: SeboThumbComponent;
  let fixture: ComponentFixture<SeboThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeboThumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeboThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

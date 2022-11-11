import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarIngresoComponent } from './confirmar-ingreso.component';

describe('ConfirmarIngresoComponent', () => {
  let component: ConfirmarIngresoComponent;
  let fixture: ComponentFixture<ConfirmarIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionComponent } from './cotizacion.component';

describe('CotizacionComponent', () => {
  let component: CotizacionComponent;
  let fixture: ComponentFixture<CotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

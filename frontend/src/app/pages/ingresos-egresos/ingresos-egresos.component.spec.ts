import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosEgresosComponent } from './ingresos-egresos.component';

describe('IngresosEgresosComponent', () => {
  let component: IngresosEgresosComponent;
  let fixture: ComponentFixture<IngresosEgresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosEgresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresosEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

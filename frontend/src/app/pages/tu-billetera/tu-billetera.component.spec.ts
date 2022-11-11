import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuBilleteraComponent } from './tu-billetera.component';

describe('TuBilleteraComponent', () => {
  let component: TuBilleteraComponent;
  let fixture: ComponentFixture<TuBilleteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuBilleteraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuBilleteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

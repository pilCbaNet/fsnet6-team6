import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirarComponent } from './retirar.component';

describe('RetirarComponent', () => {
  let component: RetirarComponent;
  let fixture: ComponentFixture<RetirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

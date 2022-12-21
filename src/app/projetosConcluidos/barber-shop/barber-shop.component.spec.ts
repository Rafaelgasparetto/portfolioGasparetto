import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberShopComponent } from './barber-shop.component';

describe('BarberShopComponent', () => {
  let component: BarberShopComponent;
  let fixture: ComponentFixture<BarberShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarberShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarberShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolosJuliaComponent } from './bolos-julia.component';

describe('BolosJuliaComponent', () => {
  let component: BolosJuliaComponent;
  let fixture: ComponentFixture<BolosJuliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolosJuliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolosJuliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

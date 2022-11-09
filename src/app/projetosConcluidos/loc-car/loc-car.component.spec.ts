import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocCarComponent } from './loc-car.component';

describe('LocCarComponent', () => {
  let component: LocCarComponent;
  let fixture: ComponentFixture<LocCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

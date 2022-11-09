import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivinaFashionComponent } from './divina-fashion.component';

describe('DivinaFashionComponent', () => {
  let component: DivinaFashionComponent;
  let fixture: ComponentFixture<DivinaFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivinaFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivinaFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

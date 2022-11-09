import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoAdvinhaComponent } from './jogo-advinha.component';

describe('JogoAdvinhaComponent', () => {
  let component: JogoAdvinhaComponent;
  let fixture: ComponentFixture<JogoAdvinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoAdvinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogoAdvinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

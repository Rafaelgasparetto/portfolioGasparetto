import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncTurComponent } from './sync-tur.component';

describe('SyncTurComponent', () => {
  let component: SyncTurComponent;
  let fixture: ComponentFixture<SyncTurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncTurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncTurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

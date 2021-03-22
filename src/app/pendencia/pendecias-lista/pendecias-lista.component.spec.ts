import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendeciasListaComponent } from './pendecias-lista.component';

describe('PendeciasListaComponent', () => {
  let component: PendeciasListaComponent;
  let fixture: ComponentFixture<PendeciasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendeciasListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendeciasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

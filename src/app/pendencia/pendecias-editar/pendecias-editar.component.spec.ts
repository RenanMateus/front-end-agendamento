import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendeciasEditarComponent } from './pendecias-editar.component';

describe('PendeciasEditarComponent', () => {
  let component: PendeciasEditarComponent;
  let fixture: ComponentFixture<PendeciasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendeciasEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendeciasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

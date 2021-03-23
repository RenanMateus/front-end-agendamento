import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosEditarComponent } from './agendamentos-editar.component';

describe('AgendamentosEditarComponent', () => {
  let component: AgendamentosEditarComponent;
  let fixture: ComponentFixture<AgendamentosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

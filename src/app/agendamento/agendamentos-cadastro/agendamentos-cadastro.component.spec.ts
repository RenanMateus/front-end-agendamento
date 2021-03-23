import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosCadastroComponent } from './agendamentos-cadastro.component';

describe('AgendamentosCadastroComponent', () => {
  let component: AgendamentosCadastroComponent;
  let fixture: ComponentFixture<AgendamentosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

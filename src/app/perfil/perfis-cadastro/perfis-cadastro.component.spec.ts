import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfisCadastroComponent } from './perfis-cadastro.component';

describe('PerfisCadastroComponent', () => {
  let component: PerfisCadastroComponent;
  let fixture: ComponentFixture<PerfisCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfisCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfisCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

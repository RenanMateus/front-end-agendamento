import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendenciaCadastroComponent } from './pendencia-cadastro.component';

describe('PendenciaCadastroComponent', () => {
  let component: PendenciaCadastroComponent;
  let fixture: ComponentFixture<PendenciaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendenciaCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendenciaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

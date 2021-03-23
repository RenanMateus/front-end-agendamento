import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfisListaComponent } from './perfis-lista.component';

describe('PerfisListaComponent', () => {
  let component: PerfisListaComponent;
  let fixture: ComponentFixture<PerfisListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfisListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

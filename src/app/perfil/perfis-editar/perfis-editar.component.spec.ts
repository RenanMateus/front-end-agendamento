import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfisEditarComponent } from './perfis-editar.component';

describe('PerfisEditarComponent', () => {
  let component: PerfisEditarComponent;
  let fixture: ComponentFixture<PerfisEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfisEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfisEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

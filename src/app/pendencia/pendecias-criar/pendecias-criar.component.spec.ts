import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendeciasCriarComponent } from './pendecias-criar.component';

describe('PendeciasCriarComponent', () => {
  let component: PendeciasCriarComponent;
  let fixture: ComponentFixture<PendeciasCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendeciasCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendeciasCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

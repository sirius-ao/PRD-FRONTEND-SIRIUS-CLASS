import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCurso } from './registrar.curso';

describe('RegistrarCurso', () => {
  let component: RegistrarCurso;
  let fixture: ComponentFixture<RegistrarCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarCurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCurso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

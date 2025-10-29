import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoTurmasCurso } from './gestao-turmas.curso';

describe('GestaoTurmasCurso', () => {
  let component: GestaoTurmasCurso;
  let fixture: ComponentFixture<GestaoTurmasCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoTurmasCurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoTurmasCurso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

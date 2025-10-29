import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasCurso } from './turmas.curso';

describe('TurmasCurso', () => {
  let component: TurmasCurso;
  let fixture: ComponentFixture<TurmasCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurmasCurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurmasCurso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasProfessor } from './turmas.professor';

describe('TurmasProfessor', () => {
  let component: TurmasProfessor;
  let fixture: ComponentFixture<TurmasProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurmasProfessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurmasProfessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

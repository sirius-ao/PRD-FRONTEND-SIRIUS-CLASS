import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosProfessor } from './horarios.professor';

describe('HorariosProfessor', () => {
  let component: HorariosProfessor;
  let fixture: ComponentFixture<HorariosProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorariosProfessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosProfessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoCurso } from './edicao.curso';

describe('EdicaoCurso', () => {
  let component: EdicaoCurso;
  let fixture: ComponentFixture<EdicaoCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoCurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoCurso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

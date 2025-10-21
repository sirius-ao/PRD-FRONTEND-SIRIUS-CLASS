import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProfessor } from './listar.professor';

describe('ListarProfessor', () => {
  let component: ListarProfessor;
  let fixture: ComponentFixture<ListarProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarProfessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarProfessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

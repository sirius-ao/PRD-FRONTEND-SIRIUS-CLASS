import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfessor } from './create.professor';

describe('CreateProfessor', () => {
  let component: CreateProfessor;
  let fixture: ComponentFixture<CreateProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProfessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProfessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

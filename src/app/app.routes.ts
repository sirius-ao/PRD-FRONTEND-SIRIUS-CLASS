import { Routes } from '@angular/router';
import { AppHomePage } from './features/home/home';
import { AppLayout } from './shared/layout/layout';
import { AlunosMatricula } from './features/alunos/matricula/alunos.matricula';
import { LandingPage } from './features/_landingpage/landing';
import { AlunosLista } from './features/alunos/listas/alunos.lista';
import { AlunosFiltros } from './features/alunos/filtros/alunos.filtros';
import { AlunoScreen } from './features/alunos/aluno/aluno';
import { AlunosHistorico } from './features/alunos/historicos/alunos.historico';
import { CreateProfessor } from './features/professores/create/create.professor';
import { ListarProfessor } from './features/professores/listar/listar.professor';
import { HorariosProfessor } from './features/professores/horarios/horarios.professor';
import { TurmasProfessor } from './features/professores/turmas/turmas.professor';
import { RegistrarCurso } from './features/cursos/registrar/registrar.curso';
import { EdicaoCurso } from './features/cursos/edicao/edicao.curso';
import { TurmasCurso } from './features/cursos/turmas/turmas.curso';
import { GestaoTurmasCurso } from './features/cursos/gestao-turmas/gestao-turmas.curso';

export const routes: Routes = [
  {
    path: "",
    redirectTo: 'dashboard/home',
    pathMatch: 'full',
  },
  {
    path: "landingpage",
    component: LandingPage,
  },
  { 
    path: "dashboard",
    component: AppLayout,
    children: [
      {
        path: 'home',
        component: AppHomePage 
      },
      {
        path: 'alunos',
        children: [
          { path: '', redirectTo: 'matricula', pathMatch: 'full' },
          { path: 'aluno', component: AlunoScreen },
          { path: 'matricula', component: AlunosMatricula },
          { path: 'listas', component: AlunosLista },
          { path: 'filtros', component: AlunosFiltros },
          { path: 'historico', component: AlunosHistorico },
          { path: 'frequencia', component: AlunosHistorico },
        ]
      },
      {
        path: 'professores',
        children: [
          { path: '', redirectTo: 'create', pathMatch: 'full' },
          { path: 'create', component: CreateProfessor },
          { path: 'listar', component: ListarProfessor },
          { path: 'turmas', component: TurmasProfessor },
          { path: 'horarios', component: HorariosProfessor },
        ]
      },
      {
        path: 'cursos',
        children: [
          { path: '', redirectTo: 'registrar', pathMatch: 'full' },
          { path: 'registrar', component: RegistrarCurso },
          { path: 'edicao', component: EdicaoCurso },
          { path: 'turmas', component: TurmasCurso },
          { path: 'gestao-turma', component: GestaoTurmasCurso },
        ]
      },
      {
        path: 'financas',
        component: AlunosMatricula,
        children: [
          {
            path: '',
            component: AlunosMatricula
          }
        ]
      },
      {
        path: 'relatorios',
        component: AlunosMatricula,
        children: [
          {
            path: '',
            component: AlunosMatricula
          }
        ]
      },
      
    ]
  }
];

import { Routes } from '@angular/router';
import { AppHomePage } from './features/home/home';
import { AppLayout } from './shared/layout/layout';
import { AlunosMatricula } from './features/alunos/matricula/alunos.matricula';
import { LandingPage } from './features/_landingpage/landing';
import { AlunosLista } from './features/alunos/listas/alunos.lista';
import { AlunosFiltros } from './features/alunos/filtros/alunos.filtros';
import { AlunoScreen } from './features/alunos/aluno/aluno';
import { AlunosHistorico } from './features/alunos/historicos/alunos.historico';

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
        component: AlunosMatricula,
        children: [
          {
            path: '',
            component: AlunosMatricula
          }
        ]
      },
      {
        path: 'cursos',
        component: AlunosMatricula,
        children: [
          {
            path: '',
            component: AlunosMatricula
          }
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

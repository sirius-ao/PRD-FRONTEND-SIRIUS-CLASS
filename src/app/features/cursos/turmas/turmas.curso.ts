import { Component } from '@angular/core';
import { HeaderIndicatorPageComponent } from "../../../shared/components/header-indicator-page/header-indicator-page.component";
import { AlunosType } from '../../../types/alunos.types';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-turmas.curso',
  imports: [HeaderIndicatorPageComponent ],
  templateUrl: './turmas.curso.html',
  styleUrl: './turmas.curso.scss'
})
export class TurmasCurso {
 
}

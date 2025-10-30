import { Component } from '@angular/core';
import { HeaderIndicatorPageComponent } from "../../../shared/components/header-indicator-page/header-indicator-page.component";
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-horarios.professor',
  imports: [HeaderIndicatorPageComponent, DataTablesModule],
  templateUrl: './horarios.professor.html',
  styleUrl: './horarios.professor.scss'
})
export class HorariosProfessor {
 
}

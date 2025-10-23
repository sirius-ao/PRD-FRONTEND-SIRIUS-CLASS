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
  dtOptions = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      processing: true,
      searching: false,
      lengthChange: false,
      data: [
        ['F150', 'Tecnologia', 'Hardware', 'QB69', 'Tarde', '15', '<Select required> <option>Miguel Joao Domingos</option><option>Filipe Adao Joia</option> </Select>' ],
        ['FA40', 'Tecnologia', 'Programacao Web', 'QB69', 'Manha', '15', '<Select required> <option>Miguel Joao Domingos</option><option>Filipe Adao Joia</option> </Select>'],
        ['F150', 'Financas', 'Contabilidade', 'CT12', 'Noite', '15', '<Select required> <option>Miguel Joao Domingos</option><option>Filipe Adao Joia</option> </Select>'],
      ],
      columns: [
        { title: '#ID' },
        { title: 'Area' },
        { title: 'Curso' },
        { title: 'Turma' },
        { title: 'Periudo' },
        { title: 'Total de alunos' },
        { title: 'Formador' },
      ]
    };
  }
}
